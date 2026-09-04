import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  as?: 'p' | 'span';
}

/** Small uppercase section label. Used above headings for context. */
export function Eyebrow({ children, as = 'p' }: EyebrowProps) {
  const Tag = as;
  return <Tag className={styles.eyebrow}>{children}</Tag>;
}
