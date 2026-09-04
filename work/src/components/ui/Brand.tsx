import type { MouseEventHandler } from 'react';
import { cn } from '../../utils/cn';
import styles from './Brand.module.css';

interface BrandProps {
  /** When provided, renders an anchor; otherwise a plain span. */
  href?: string;
  className?: string;
  /** Passed through to the anchor (e.g. to close the mobile menu). */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/** Async Labs wordmark + device glyph. Shared by navbar, menu and future footer. */
export function Brand({ href = '#top', className, onClick }: BrandProps) {
  const content = (
    <>
      <svg className={styles.mark} viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="var(--color-device-frame)" />
        <rect x="16" y="18" width="32" height="22" rx="3" fill="var(--color-device-screen)" />
        <rect x="26" y="44" width="12" height="4" rx="2" fill="var(--color-accent)" />
      </svg>
      <span className={styles.wordmark}>Async Labs</span>
    </>
  );

  if (href) {
    return (
      <a
        className={cn(styles.brand, className)}
        href={href}
        aria-label="Async Labs — back to top"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return <span className={cn(styles.brand, className)}>{content}</span>;
}
