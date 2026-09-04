import { useEffect, useRef } from 'react';
import { navLinks } from '../../data/content';
import { Brand } from '../ui/Brand';
import { ButtonLink } from '../ui/Button';
import { Icon } from '../ui/icons';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

/**
 * Accessible slide-in navigation dialog:
 * focus trap, Escape to close, scroll lock, focus return on close.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    getFocusable(panel)[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusable = getFocusable(panel);
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.scrim} aria-hidden="true" onClick={onClose} />

      <div
        id="mobile-menu"
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        ref={panelRef}
      >
        <div className={styles.header}>
          <Brand href="#top" onClick={onClose} />
          <button
            type="button"
            className={styles.close}
            aria-label="Close menu"
            onClick={onClose}
          >
            <Icon name="close" size={22} />
          </button>
        </div>

        <nav className={styles.nav} aria-label="Mobile">
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className={styles.link} href={link.href} onClick={onClose}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <ButtonLink href="#day" variant="primary" onClick={onClose}>
            See it in action
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
