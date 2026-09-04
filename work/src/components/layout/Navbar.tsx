import { useCallback, useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
import { navLinks } from '../../data/content';
import { Brand } from '../ui/Brand';
import { ButtonLink } from '../ui/Button';
import { Icon } from '../ui/icons';
import { Container } from '../ui/Container';
import { MobileMenu } from './MobileMenu';
import styles from './Navbar.module.css';

const SCROLL_THRESHOLD = 8;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={cn(styles.navbar, scrolled && styles.scrolled)}>
        <Container className={styles.inner}>
          <Brand />

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a className={styles.link} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <ButtonLink href="#day" variant="primary" className={styles.cta}>
              See it in action
            </ButtonLink>

            <button
              type="button"
              className={styles.menuTrigger}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
