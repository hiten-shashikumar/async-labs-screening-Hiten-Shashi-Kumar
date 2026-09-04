import styles from './SkipLink.module.css';

/** Keyboard-only link that jumps to the main content. Must stay first in the DOM. */
export function SkipLink() {
  return (
    <a className={styles.skipLink} href="#main">
      Skip to content
    </a>
  );
}
