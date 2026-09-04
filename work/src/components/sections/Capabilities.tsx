import { useState } from 'react';
import {
  capabilitiesSection,
  capabilityGroups,
  type CapabilityGroupId,
} from '../../data/content';
import { cn } from '../../utils/cn';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { CapabilityScreen } from '../device/CapabilityScreen';
import { DeviceFrame } from '../device/DeviceFrame';
import styles from './Capabilities.module.css';

/**
 * Section B — interactive capability explorer.
 * One primary interaction: select a category, the preview and the
 * capability list update together. No cards, no carousel.
 */
export function Capabilities() {
  const [activeId, setActiveId] = useState<CapabilityGroupId>('content');
  const activeGroup =
    capabilityGroups.find((group) => group.id === activeId) ?? capabilityGroups[0];

  return (
    <section id="features" className={styles.capabilities} aria-labelledby="features-title">
      <Container className={styles.inner}>
        <header className={styles.header}>
          <Eyebrow>{capabilitiesSection.eyebrow}</Eyebrow>
          <h2 id="features-title" className={styles.title}>
            {capabilitiesSection.title}
          </h2>
          <p className={styles.description}>{capabilitiesSection.description}</p>
        </header>

        <div className={styles.explorer}>
          <div className={styles.selector} role="group" aria-label="Choose a capability category">
            {capabilityGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={cn(styles.selectorButton, activeId === group.id && styles.selectorButtonActive)}
                aria-pressed={activeId === group.id}
                onClick={() => setActiveId(group.id)}
              >
                <span className={styles.selectorIndex} aria-hidden="true">
                  {group.index}
                </span>
                <span className={styles.selectorLabel}>{group.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.preview} key={`preview-${activeGroup.id}`}>
            <div className={styles.frameWrap}>
              <DeviceFrame>
                <CapabilityScreen variant={activeGroup.id} />
              </DeviceFrame>
            </div>
            <p className={styles.previewCaption}>{activeGroup.description}</p>
          </div>

          <div className={styles.panel} key={`panel-${activeGroup.id}`}>
            <h3 className={styles.panelTitle} aria-live="polite">
              {activeGroup.label}
            </h3>
            <ul className={styles.capabilityList}>
              {activeGroup.capabilities.map((capability) => (
                <li key={capability.id} className={styles.capability}>
                  <h4 className={styles.capabilityTitle}>{capability.title}</h4>
                  <p className={styles.capabilityBody}>{capability.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
