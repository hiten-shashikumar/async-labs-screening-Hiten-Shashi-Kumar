import { claims, hero } from '../../data/content';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Icon } from '../ui/icons';
import { GlancePreview } from './GlancePreview';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Eyebrow as="span">{hero.eyebrow}</Eyebrow>
          <h1 id="hero-title" className={styles.title}>
            {hero.title}
          </h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>

          <div className={styles.ctaRow}>
            <ButtonLink href={hero.primaryCta.href} variant="primary" size="lg">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className={styles.stage}>
          <picture>
            <source srcSet="/assets/product-hero.webp" type="image/webp" />
            <img
              src="/assets/product-hero.png"
              alt={hero.imageAlt}
              width={1007}
              height={841}
            />
          </picture>
        </div>

        <ul className={styles.claims}>
          {claims.map((claim) => (
            <li key={claim.id} className={styles.claim}>
              <Icon name={claim.icon} size={20} />
              <span className={styles.claimTitle}>{claim.title}</span>
              <span className={styles.claimDetail}>{claim.detail}</span>
            </li>
          ))}
        </ul>

        <GlancePreview />
      </Container>
    </section>
  );
}
