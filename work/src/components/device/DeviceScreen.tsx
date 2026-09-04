import { dayStates, type DayStateId } from '../../data/content';
import styles from './DeviceScreen.module.css';

interface DeviceScreenProps {
  variant: DayStateId;
}

/**
 * Miniature e-paper screen content for the four "day at a glance"
 * states. Every screen shows only source-supported information.
 */
export function DeviceScreen({ variant }: DeviceScreenProps) {
  const state = dayStates.find((item) => item.id === variant) ?? dayStates[0];

  switch (state.id) {
    case 'morning':
      return (
        <div className={styles.screen} aria-hidden="true">
          <div className={styles.dateRow}>
            <span className={styles.dateLabel}>Tue</span>
            <span className={styles.dateDay}>27</span>
            <span className={styles.dateLabel}>May</span>
          </div>
          <div className={styles.bar}>Today&rsquo;s schedule</div>
          <ul className={styles.list}>
            <li><span>9:30</span><span>Team Standup</span></li>
            <li><span>11:00</span><span>Design Review</span></li>
            <li><span>1:30</span><span>Client Call</span></li>
            <li><span>3:00</span><span>Focus Time</span></li>
            <li><span>5:00</span><span>Wrap Up</span></li>
          </ul>
        </div>
      );

    case 'focus':
      return (
        <div className={styles.screenCenter} aria-hidden="true">
          <div className={styles.kicker}>Focus Time</div>
          <div className={styles.heading}>Do Not Disturb</div>
          <div className={styles.divider} />
          <div className={styles.status}>Deep Work · In Progress</div>
        </div>
      );

    case 'meeting':
      return (
        <div className={styles.screenCenter} aria-hidden="true">
          <div className={styles.kicker}>Meeting Room</div>
          <div className={styles.heading}>Available</div>
          <div className={styles.time}>10:00 AM – 11:00 AM</div>
          <div className={styles.divider} />
          <div className={styles.status}>Project Review</div>
        </div>
      );

    case 'evening':
      return (
        <div className={styles.screen} aria-hidden="true">
          <div className={styles.bar}>Wrap Up</div>
          <div className={styles.sectionLabel}>Tomorrow</div>
          <ul className={styles.list}>
            <li><span>9:00</span><span>Team Standup</span></li>
            <li><span>11:00</span><span>Design Review</span></li>
          </ul>
        </div>
      );
  }
}
