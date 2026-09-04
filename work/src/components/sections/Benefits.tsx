import { benefits, benefitsSection } from '../../data/content';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import styles from './Benefits.module.css';

/**
 * Section A — why the three hero claims matter.
 * Editorial numbered rows, no cards, no repetition of the hero strip.
 */
export function Benefits() {
  return (
    <section id="why" className={styles.benefits} aria-labelledby="why-title">
      <Container className={styles.inner}>
        <header className={styles.header}>
          <Eyebrow>{benefitsSection.eyebrow}</Eyebrow>
          <h2 id="why-title" className={styles.title}>
            {benefitsSection.title}
          </h2>
          <p className={styles.description}>{benefitsSection.description}</p>
        </header>

        <ol className={styles.list}>
          {benefits.map((benefit) => (
            <li key={benefit.id} className={styles.item}>
              <span className={styles.index} aria-hidden="true">
                {benefit.index}
              </span>
              <h3 className={styles.itemTitle}>{benefit.title}</h3>
              <p className={styles.itemBody}>{benefit.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
