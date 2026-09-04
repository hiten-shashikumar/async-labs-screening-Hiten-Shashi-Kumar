import type { UseCaseId } from '../../data/content';
import styles from './UseCaseScreen.module.css';

interface UseCaseScreenProps {
  variant: UseCaseId;
}

/**
 * E-paper screen content for the four use-case contexts.
 * One physical device, four information roles — all content is
 * source-supported and rendered in the established e-paper language.
 */
export function UseCaseScreen({ variant }: UseCaseScreenProps) {
  switch (variant) {
    case 'plan':
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
        <div className={styles.screen} aria-hidden="true">
          <div className={styles.kicker}>Today</div>
          <div className={styles.heading}>Focus</div>
          <ul className={styles.taskList}>
            <li>Finish prototype</li>
            <li>Review presentation</li>
            <li>Prepare meeting notes</li>
          </ul>
          <div className={styles.divider} />
          <div className={styles.nowRow}>
            <span className={styles.nowLabel}>Now</span>
            <span className={styles.nowValue}>Deep Work</span>
          </div>
        </div>
      );

    case 'shared':
      return (
        <div className={styles.screenCenter} aria-hidden="true">
          <div className={styles.kicker}>Meeting room</div>
          <div className={styles.time}>10:00 — 11:00</div>
          <div className={styles.heading}>Design Review</div>
          <div className={styles.divider} />
          <div className={styles.nextRow}>
            <span className={styles.nextLabel}>Next</span>
            <span>11:30 · Team Sync</span>
          </div>
        </div>
      );

    case 'create':
      return (
        <div className={styles.quoteScreen} aria-hidden="true">
          <span className={styles.quoteMark}>&ldquo;</span>
          <p className={styles.quoteText}>Stay focused and keep shipping.</p>
          <div className={styles.divider} />
          <span className={styles.quoteLabel}>Custom content</span>
        </div>
      );
  }
}
