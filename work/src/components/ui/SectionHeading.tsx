import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Eyebrow } from './Eyebrow';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
}

/**
 * Consistent section heading: eyebrow → h2 → optional description.
 * Single implementation keeps typography and rhythm identical
 * across every future section.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        styles.heading,
        align === 'center' ? styles.alignCenter : styles.alignLeft,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
