import { useState } from 'react';
import { cn } from '../../utils/cn';
import { dayStates, hero, type DayStateId } from '../../data/content';
import { Eyebrow } from '../ui/Eyebrow';
import { DeviceFrame } from '../device/DeviceFrame';
import { DeviceScreen } from '../device/DeviceScreen';
import styles from './GlancePreview.module.css';

/**
 * Signature hero interaction: one display, four moments of the day.
 * Reinforces "information at a glance" using only source-supported
 * screen content (schedule, focus, meeting, wrap-up).
 */
export function GlancePreview() {
  const [active, setActive] = useState<DayStateId>('morning');
  const activeState = dayStates.find((state) => state.id === active) ?? dayStates[0];

  return (
    <div id="day" className={styles.glance}>
      <header className={styles.header}>
        <Eyebrow>{hero.glance.eyebrow}</Eyebrow>
        <h2 className={styles.title}>{hero.glance.title}</h2>
        <p className={styles.description}>{hero.glance.description}</p>
      </header>

      <div className={styles.controls} role="group" aria-label="Choose a moment of the day">
        {dayStates.map((state) => (
          <button
            key={state.id}
            type="button"
            className={cn(styles.segment, active === state.id && styles.segmentActive)}
            aria-pressed={active === state.id}
            onClick={() => setActive(state.id)}
          >
            {state.label}
          </button>
        ))}
      </div>

      <div className={styles.preview}>
        <div className={styles.frameWrap}>
          <DeviceFrame>
            <DeviceScreen variant={active} />
          </DeviceFrame>
        </div>
        <p className={styles.caption} aria-live="polite">
          {activeState.caption}
        </p>
      </div>
    </div>
  );
}
