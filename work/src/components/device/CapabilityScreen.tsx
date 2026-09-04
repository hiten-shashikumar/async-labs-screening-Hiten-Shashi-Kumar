import type { CapabilityGroupId } from '../../data/content';
import styles from './CapabilityScreen.module.css';

interface CapabilityScreenProps {
  variant: CapabilityGroupId;
}

/**
 * Representational e-paper screen content for the capability explorer.
 * Pure marketing representation — not a working configurator.
 * All content is source-supported.
 */
export function CapabilityScreen({ variant }: CapabilityScreenProps) {
  switch (variant) {
    case 'content':
      return (
        <div className={styles.screen} aria-hidden="true">
          <div className={styles.dateRow}>
            <span className={styles.dateLabel}>Tue</span>
            <span className={styles.dateDay}>27</span>
            <span className={styles.dateLabel}>May</span>
          </div>
          <div className={styles.divider} />
          <ul className={styles.list}>
            <li><span>9:30</span><span>Team Standup</span></li>
            <li><span>11:00</span><span>Design Review</span></li>
          </ul>
          <div className={styles.imageTile}>Your image</div>
        </div>
      );

    case 'automation':
      return (
        <div className={styles.screen} aria-hidden="true">
          <div className={styles.bar}>Scheduled</div>
          <ul className={styles.list}>
            <li>
              <span>9:00</span>
              <span>Morning brief</span>
              <span className={styles.tag}>auto</span>
            </li>
            <li>
              <span>1:00</span>
              <span>Focus block</span>
              <span className={styles.tag}>auto</span>
            </li>
          </ul>
          <div className={styles.footer}>Updates automatically · 08:00</div>
        </div>
      );

    case 'connection':
      return (
        <div className={styles.screen} aria-hidden="true">
          <div className={styles.bar}>Connected</div>
          <ul className={styles.list}>
            <li><span>Google Calendar</span><span className={styles.synced}>Synced</span></li>
            <li><span>Outlook Calendar</span><span className={styles.synced}>Synced</span></li>
            <li><span>Slack / Teams</span><span className={styles.synced}>Status</span></li>
          </ul>
        </div>
      );

    case 'placement':
      return (
        <div className={styles.screenCenter} aria-hidden="true">
          <div className={styles.kicker}>Placement</div>
          <div className={styles.heading}>Desk or wall</div>
          <div className={styles.divider} />
          <div className={styles.status}>Where the information is most useful</div>
        </div>
      );
  }
}
