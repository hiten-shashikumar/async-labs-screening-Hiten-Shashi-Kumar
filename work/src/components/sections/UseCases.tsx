import { useState } from 'react';
import { useCases, useCasesSection, type UseCaseId } from '../../data/content';
import { cn } from '../../utils/cn';
import { Container } from '../ui/Container';
import { DeviceFrame } from '../device/DeviceFrame';
import { UseCaseScreen } from '../device/UseCaseScreen';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './UseCases.module.css';

/**
 * Phase 6 — Use-case explorer.
 * ONE physical display, FOUR contexts. Selecting a use case changes
 * the e-paper content and the explanation; the hardware stays fixed.
 * This is a representation, not a live configurator.
 */
export function UseCases() {
  const [activeId, setActiveId] = useState<UseCaseId>('plan');
  const active = useCases.find((useCase) => useCase.id === activeId) ?? useCases[0];

  return (
    <section id="use-cases" className={styles.useCases} aria-labelledby="use-cases-title">
      <Container className={styles.inner}>
        <SectionHeading
          align="center"
          id="use-cases-title"
          eyebrow={useCasesSection.eyebrow}
          title={useCasesSection.title}
          description={useCasesSection.description}
        />

        <div className={styles.explorer}>
          <div className={styles.selector} role="group" aria-label="Choose a use case">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                type="button"
                className={cn(
                  styles.selectorButton,
                  activeId === useCase.id && styles.selectorButtonActive,
                )}
                aria-pressed={activeId === useCase.id}
                onClick={() => setActiveId(useCase.id)}
              >
                <span className={styles.selectorNumber} aria-hidden="true">
                  {useCase.number}
                </span>
                <span className={styles.selectorLabel}>{useCase.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.device} key={`device-${active.id}`}>
            <div className={styles.frameWrap}>
              <DeviceFrame>
                <UseCaseScreen variant={active.id} />
              </DeviceFrame>
            </div>
          </div>

          <div className={styles.panel} key={`panel-${active.id}`}>
            <h3 className={styles.panelTitle} aria-live="polite">
              {active.title}
            </h3>
            <p className={styles.panelDescription}>{active.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
