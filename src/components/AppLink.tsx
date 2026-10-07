import React from 'react';
import { getAppUrl } from '@/lib/leadToken';
import { useVslSource } from '@/context/VslVariant';

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  appPath?: string;
  children: React.ReactNode;
}

const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ appPath = '/', onClick, children, ...props }, ref) => {
    const source = useVslSource();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) onClick(e);

      // Same-tab navigation: on mobile / in-app browsers (Facebook, Instagram,
      // WhatsApp) a new tab opens silently in the background and users never
      // find it. The short delay lets Meta Pixel / PostHog flush first.
      setTimeout(() => {
        const url = getAppUrl(appPath, source);
        const ua = navigator.userAgent;
        const inApp = /instagram|fban|fbav/i.test(ua);
        if (inApp && /android/i.test(ua)) {
          // Hand off to Chrome, keeping source/lead params; fall back to same tab.
          const u = new URL(url);
          const fallback = encodeURIComponent(url);
          window.location.href = `intent://${u.host}${u.pathname}${u.search}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${fallback};end`;
          return;
        }
        if (inApp && /iphone|ipad|ipod/i.test(ua)) {
          // iOS: x-safari scheme opens Safari from Instagram's WebView.
          window.location.href = `x-safari-${url}`;
          setTimeout(() => {
            if (document.visibilityState === 'visible') window.location.href = url;
          }, 1500);
          return;
        }
        window.location.href = url;
      }, 300);
    };


    return (
      <a
        ref={ref}
        href={`https://app.zockto.com${appPath}${source ? `?source=${source}` : ''}`}
        rel="noopener"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
);

AppLink.displayName = 'AppLink';

export default AppLink;
