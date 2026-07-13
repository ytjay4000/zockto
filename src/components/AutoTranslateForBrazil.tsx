import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CACHE_KEY = 'geo_country_code';
const CACHE_EXPIRY_KEY = 'geo_country_code_expiry';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24h
const DISMISS_KEY = 'pt_auto_translate_dismissed';

const setGoogTransCookie = () => {
  // Set googtrans cookie for the current host + parent domain so Google Translate
  // auto-translates every page from English to Portuguese.
  const value = '/en/pt';
  const hostname = window.location.hostname;
  document.cookie = `googtrans=${value};path=/`;
  if (hostname.split('.').length > 1) {
    const parent = '.' + hostname.split('.').slice(-2).join('.');
    document.cookie = `googtrans=${value};path=/;domain=${parent}`;
  }
};

const injectGoogleTranslate = () => {
  if (document.getElementById('google-translate-script')) return;

  const container = document.createElement('div');
  container.id = 'google_translate_element';
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '-9999px';
  document.body.appendChild(container);

  // Hide the Google Translate top bar and tooltip artifacts.
  const style = document.createElement('style');
  style.innerHTML = `
    .goog-te-banner-frame.skiptranslate,
    .goog-te-gadget-icon,
    .goog-tooltip,
    .goog-tooltip:hover,
    .goog-text-highlight { display: none !important; }
    body { top: 0 !important; }
  `;
  document.head.appendChild(style);

  (window as any).googleTranslateElementInit = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (window as any).google.translate.TranslateElement(
      { pageLanguage: 'en', includedLanguages: 'pt', autoDisplay: false },
      'google_translate_element'
    );
  };

  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
};

const AutoTranslateForBrazil = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === '1') return;

    const applyForCountry = (code: string) => {
      const isBrOrPt = code === 'BR' || code === 'PT';
      if (!isBrOrPt) return;

      // If on the English homepage, prefer the fully hand-translated /pt page.
      if (location.pathname === '/') {
        navigate('/pt' + location.search + location.hash, { replace: true });
        return;
      }
      // For any other route (case studies, blog, etc.), auto-translate via Google.
      if (!location.pathname.startsWith('/pt')) {
        setGoogTransCookie();
        injectGoogleTranslate();
      }
    };

    const cached = localStorage.getItem(CACHE_KEY);
    const expiry = localStorage.getItem(CACHE_EXPIRY_KEY);
    if (cached && expiry && Date.now() < Number(expiry)) {
      applyForCountry(cached);
      return;
    }

    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => {
        const code = data.country_code || '';
        if (code) {
          localStorage.setItem(CACHE_KEY, code);
          localStorage.setItem(CACHE_EXPIRY_KEY, String(Date.now() + CACHE_DURATION));
        }
        applyForCountry(code);
      })
      .catch(() => {});
  }, [location.pathname, location.search, location.hash, navigate]);

  return null;
};

export default AutoTranslateForBrazil;
