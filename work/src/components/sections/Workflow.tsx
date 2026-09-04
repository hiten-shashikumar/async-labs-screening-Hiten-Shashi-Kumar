import { Fragment } from 'react';
import {
  workflowSection,
  workflowStages,
  type WorkflowStageId,
} from '../../data/content';
import { Container } from '../ui/Container';
import { DeviceFrame } from '../device/DeviceFrame';
import { DeviceScreen } from '../device/DeviceScreen';
import { Eyebrow } from '../ui/Eyebrow';
import { Icon } from '../ui/icons';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Workflow.module.css';

/**
 * Phase 5 — Workflow section.
 * One connected narrative: existing tools → companion app → physical display.
 * Single interaction: hover/focus emphasis on a stage (and its connectors).
 */

function SourcesVisual() {
  return (
    <div className={styles.sources} aria-hidden="true">
      <span className={styles.sourceLabel}>Calendar</span>
      <ul className={styles.sourceList}>
        <li><span>9:30</span><span>Team Standup</span></li>
        <li><span>11:00</span><span>Design Review</span></li>
      </ul>
      <div className={styles.sourceDivider} />
      <div className={styles.sourceRow}>
        <span>Tasks</span>
        <span className={styles.sourceMuted}>03 items today</span>
      </div>
      <div className={styles.sourceDivider} />
      <div className={styles.sourceRow}>
        <span>Status</span>
        <span className={styles.sourceAccent}>Focus</span>
      </div>
    </div>
  );
}

function AppVisual() {
  return (
    <div className={styles.app} aria-hidden="true">
      <div className={styles.appBar}>Companion app</div>
      <div className={styles.appBody}>
        <div className={styles.appSection}>
          <span className={styles.appLabel}>Display</span>
          <div className={styles.appChips}>
            <span className={styles.appChip}>Calendar</span>
            <span className={styles.appChip}>Tasks</span>
            <span className={styles.appChip}>Focus</span>
          </div>
        </div>
        <div className={styles.appSection}>
          <span className={styles.appLabel}>Layout</span>
          <div className={styles.appChips}>
            <span className={styles.appChip}>Schedule</span>
            <span className={styles.appChip}>Template</span>
            <span className={styles.appChip}>Custom</span>
          </div>
        </div>
        <div className={styles.appSection}>
          <span className={styles.appLabel}>Schedule</span>
          <div className={styles.appRow}>
            <span className={styles.appTime}>08:00</span>
            <span>Automatic update</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisplayVisual() {
  return (
    <div className={styles.displayVisual} aria-hidden="true">
      <DeviceFrame>
        <DeviceScreen variant="morning" />
      </DeviceFrame>
    </div>
  );
}

function StageVisual({ id }: { id: WorkflowStageId }) {
  switch (id) {
    case 'tools':
      return <SourcesVisual />;
    case 'app':
      return <AppVisual />;
    case 'display':
      return <DisplayVisual />;
  }
}

export function Workflow() {
  return (
    <section id="workflow" className={styles.workflow} aria-labelledby="workflow-title">
      <Container className={styles.inner}>
        <SectionHeading
          align="center"
          id="workflow-title"
          eyebrow={workflowSection.eyebrow}
          title={workflowSection.title}
          description={workflowSection.description}
        />

        <div className={styles.grid}>
          {workflowStages.map((stage, index) => (
            <Fragment key={stage.id}>
              <article className={styles.stage} tabIndex={0}>
                <div className={styles.visual}>
                  <StageVisual id={stage.id} />
                </div>

                <p className={styles.meta}>
                  <span className={styles.number} aria-hidden="true">
                    {stage.number}
                  </span>
                  <Eyebrow as="span">{stage.eyebrow}</Eyebrow>
                </p>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
                <p className={styles.stageDescription}>{stage.description}</p>
              </article>

              {index < workflowStages.length - 1 ? (
                <div className={styles.connector} aria-hidden="true">
                  <span className={styles.connectorLine} />
                  <Icon name="arrowRight" size={14} />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
