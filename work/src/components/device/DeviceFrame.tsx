import type { ReactNode } from 'react';
import styles from './DeviceFrame.module.css';

interface DeviceFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * CSS rendering of the fixed physical hardware: charcoal frame,
 * paper-white e-paper screen, wide bottom chin with the Async Labs
 * wordmark. Keeps the product recognizable in every preview.
 */
export function DeviceFrame({ children, className }: DeviceFrameProps) {
  return (
    <div className={className}>
      <div className={styles.frame}>
        <div className={styles.screen}>{children}</div>
        <div className={styles.chin} aria-hidden="true">
          Async Labs
        </div>
      </div>
    </div>
  );
}
