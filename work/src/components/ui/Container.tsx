import type { ElementType, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Container.module.css';

interface ContainerProps {
  /** Element to render. Defaults to div; pass 'section', 'header', etc. as needed. */
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

/**
 * The single horizontal layout primitive.
 * Enforces max-width and responsive gutters so sections never
 * reinvent them and horizontal overflow is prevented by construction.
 */
export function Container({ as: Tag = 'div', children, className }: ContainerProps) {
  return <Tag className={cn(styles.container, className)}>{children}</Tag>;
}
