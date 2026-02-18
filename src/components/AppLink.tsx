import React from 'react';
import { getAppUrl } from '@/lib/leadToken';

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  appPath?: string;
  children: React.ReactNode;
}

/**
 * A link component that redirects to app.zockto.com with the lead token appended.
 */
const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ appPath = '/ugc-ads', onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) onClick(e);
      window.open(getAppUrl(appPath), '_blank', 'noopener,noreferrer');
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
