import { finalCta } from '../../data/content';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import styles from './FinalCta.module.css';

/**
 * Restrained closing CTA. Honest internal destination (#day), no fake
 * purchase/signup flow.
 */
export function FinalCta() {
  return (
    <section id="get" className={styles.finalCta} aria-labelledby="get-title">
      <Container className={styles.inner}>
        <h2 id="get-title" className={styles.title}>
          {finalCta.title}
        </h2>
        <p className={styles.subtitle}>{finalCta.subtitle}</p>
        <ButtonLink href={finalCta.cta.href} variant="primary" size="lg">
          {finalCta.cta.label}
        </ButtonLink>
      </Container>
    </section>
  );
}
