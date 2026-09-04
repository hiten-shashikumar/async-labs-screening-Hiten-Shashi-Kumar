import { footer, navLinks } from '../../data/content';
import { Brand } from '../ui/Brand';
import { Container } from '../ui/Container';
import styles from './Footer.module.css';

/**
 * Minimal footer: brand, section links, and source-supported
 * companion-app/platform facts. No fake links, no social icons.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.top}>
          <Brand />
          <nav className={styles.nav} aria-label="Footer">
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
        </div>

        <div className={styles.middle}>
          <p className={styles.appLine}>
            Manage everything from our companion app —{' '}
            {footer.appSteps.join(' · ')}
          </p>
          <p className={styles.platforms}>{footer.platforms.join(' · ')}</p>
        </div>
      </Container>
    </footer>
  );
}
