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
        window.location.href = getAppUrl(appPath, source);
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
