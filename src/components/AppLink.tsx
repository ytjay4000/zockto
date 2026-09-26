import React from 'react';
import { getAppUrl } from '@/lib/leadToken';

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  appPath?: string;
  children: React.ReactNode;
}

const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ appPath = '/', onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) onClick(e);

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead');
      }

      setTimeout(() => {
        window.open(getAppUrl(appPath), '_blank', 'noopener,noreferrer');
      }, 300);
    };

    return (
      <a
        ref={ref}
        href={`https://app.zockto.com${appPath}`}
        target="_blank"
        rel="noopener noreferrer"
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
