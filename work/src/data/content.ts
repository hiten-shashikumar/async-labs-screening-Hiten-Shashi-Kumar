/* ============================================================
   Content architecture — single source of copy and structured data.
   Every string originates from the three Async Labs source
   documents or the approved Phase 1 specification.
   No invented product claims.
   ============================================================ */

export const hero = {
  eyebrow: 'Async Labs · 7.5-inch Smart Workspace Display',
  title: 'Smart. Simple. Always Visible.',
  subtitle:
    'A low-power display that keeps what matters to you visible in your workspace — always up to date, personalized, and effortlessly in sync with your world.',
  primaryCta: { label: 'See it in action', href: '#day' },
  secondaryCta: { label: 'What it can show', href: '#features' },
  imageAlt:
    'Async Labs 7.5-inch smart workspace display with a matte charcoal frame, wide lower bezel, and rear kickstand, standing on a desk.',
  glance: {
    eyebrow: 'A day at a glance',
    title: 'One display. Four moments.',
    description:
      'Scheduled, automatic, and always in sight — the display follows the shape of the day without anyone touching it.',
  },
} as const;

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const navLinks: readonly NavLink[] = [
  { id: 'why', label: 'Product', href: '#why' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'day', label: 'Day view', href: '#day' },
  { id: 'workflow', label: 'Workflow', href: '#workflow' },
  { id: 'use-cases', label: 'Use cases', href: '#use-cases' },
] as const;

export type ClaimIcon = 'battery' | 'bolt' | 'eye';

export interface Claim {
  id: string;
  icon: ClaimIcon;
  title: string;
  detail: string;
}

export const claims: readonly Claim[] = [
  {
    id: 'battery',
    icon: 'battery',
    title: 'Up to 1 Month Battery Life',
    detail: '~2 hour charge',
  },
  {
    id: 'power',
    icon: 'bolt',
    title: 'Ultra Low Power',
    detail: 'Uses power only when updating the screen',
  },
  {
    id: 'clarity',
    icon: 'eye',
    title: 'Paper-like Clarity',
    detail: 'Easy on the eyes. Zero distractions.',
  },
] as const;

export type DayStateId = 'morning' | 'focus' | 'meeting' | 'evening';

export interface DayState {
  id: DayStateId;
  label: string;
  caption: string;
}

export const dayStates: readonly DayState[] = [
  {
    id: 'morning',
    label: 'Morning',
    caption: "The day starts with what's next.",
  },
  {
    id: 'focus',
    label: 'Focus',
    caption: "Signal to the room: I'm in it.",
  },
  {
    id: 'meeting',
    label: 'Meeting',
    caption: 'A shared space shows its own status.',
  },
  {
    id: 'evening',
    label: 'Evening',
    caption: 'Close the day; tomorrow is already in view.',
  },
] as const;

export const workflowSection = {
  eyebrow: 'How it works',
  title: 'From the tools you already use to the space you can see.',
  description:
    'Bring information in, shape what appears, and keep it visible where it matters.',
} as const;

export type WorkflowStageId = 'tools' | 'app' | 'display';

export interface WorkflowStage {
  id: WorkflowStageId;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}

export const workflowStages: readonly WorkflowStage[] = [
  {
    id: 'tools',
    number: '01',
    eyebrow: 'Existing tools',
    title: 'Bring information in.',
    description:
      'Calendars, tasks, images, text and other useful content can become part of the display.',
  },
  {
    id: 'app',
    number: '02',
    eyebrow: 'Companion app',
    title: 'Shape what appears.',
    description:
      'Use the companion app to manage content, layouts, templates and schedules.',
  },
  {
    id: 'display',
    number: '03',
    eyebrow: 'Your space',
    title: 'Keep it in sight.',
    description:
      'Place the display where the information is most useful — on a desk or wall.',
  },
] as const;

export const useCasesSection = {
  eyebrow: 'Use cases',
  title: 'One display. Different roles.',
  description:
    'The same quiet surface adapts to the information that matters in different spaces and moments.',
} as const;

export type UseCaseId = 'plan' | 'focus' | 'shared' | 'create';

export interface UseCase {
  id: UseCaseId;
  number: string;
  label: string;
  title: string;
  description: string;
}

export const useCases: readonly UseCase[] = [
  {
    id: 'plan',
    number: '01',
    label: 'Plan',
    title: "Know what's next.",
    description:
      "Keep meetings and the day's schedule visible without opening another window.",
  },
  {
    id: 'focus',
    number: '02',
    label: 'Focus',
    title: 'Keep the priority in view.',
    description:
      'The current task and the next steps stay in sight — a quiet, glanceable cue.',
  },
  {
    id: 'shared',
    number: '03',
    label: 'Shared',
    title: 'Make the room legible.',
    description:
      'Meeting availability and the next session, visible to anyone who passes.',
  },
  {
    id: 'create',
    number: '04',
    label: 'Create',
    title: 'Make it yours.',
    description:
      'Quotes, images and custom artwork — the display is also a surface for personal expression.',
  },
] as const;

export const footer = {
  appSteps: ['Create', 'Customize', 'Schedule', 'Preview', 'Send', 'Update'],
  platforms: ['iOS', 'Android', 'macOS', 'Windows'],
} as const;

export const finalCta = {
  title: 'Keep what matters in sight.',
  subtitle: 'Smart. Simple. Always Visible — on a desk or on a wall.',
  cta: { label: 'See it in action', href: '#day' },
} as const;

/* ---- Phase 4: benefits + capabilities ---- */

export const benefitsSection = {
  eyebrow: 'Why it exists',
  title: "The information you care about shouldn't live behind a window.",
  description:
    'Calendars, tasks, meetings, metrics — the things you check all day. This display keeps them in the room: always on, always current, without taking over your screen.',
} as const;

export interface Benefit {
  id: string;
  index: string;
  title: string;
  description: string;
}

export const benefits: readonly Benefit[] = [
  {
    id: 'always-there',
    index: '01',
    title: 'Always there',
    description:
      'The display keeps chosen information in the room — visible without another tab, window, or unlock.',
  },
  {
    id: 'low-attention',
    index: '02',
    title: 'Low attention',
    description:
      'Low-power operation keeps it useful for up to 30 days on a single charge — not another device to babysit.',
  },
  {
    id: 'easy-to-live-with',
    index: '03',
    title: 'Easy to live with',
    description:
      'A paper-like screen keeps every glance calm — easy on the eyes, zero distractions.',
  },
] as const;

export const capabilitiesSection = {
  eyebrow: 'What it can show',
  title: 'Put what matters in view.',
  description:
    'Choose a direction and see what the display can do. This is a representation of the product, not a live configurator.',
} as const;

export type CapabilityGroupId = 'content' | 'automation' | 'connection' | 'placement';

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface CapabilityGroup {
  id: CapabilityGroupId;
  index: string;
  label: string;
  description: string;
  capabilities: readonly Capability[];
}

export const capabilityGroups: readonly CapabilityGroup[] = [
  {
    id: 'content',
    index: '01',
    label: 'Content',
    description: 'Show what you make, choose, or capture.',
    capabilities: [
      {
        id: 'upload',
        title: 'Upload Anything',
        description:
          'Bring calendars, tasks, images, text and other useful content into the display.',
      },
      {
        id: 'templates',
        title: 'Use Templates',
        description:
          'Start from ready-made layouts instead of designing everything from scratch.',
      },
      {
        id: 'create-your-own',
        title: 'Create Your Own',
        description: 'Reconfigure layouts to suit the information you want visible.',
      },
    ],
  },
  {
    id: 'automation',
    index: '02',
    label: 'Automation',
    description: 'Set it once. It keeps itself current.',
    capabilities: [
      {
        id: 'schedule',
        title: 'Schedule Content',
        description: 'Choose when information should appear.',
      },
      {
        id: 'auto-updates',
        title: 'Automatic Updates',
        description: 'Keep displayed information current without repeated manual work.',
      },
      {
        id: 'reconfigure',
        title: 'Reconfigure Anytime',
        description: 'Change what is shown and how it is arranged.',
      },
    ],
  },
  {
    id: 'connection',
    index: '03',
    label: 'Connection',
    description: 'Your existing tools, on a persistent surface.',
    capabilities: [
      {
        id: 'sync-apps',
        title: 'Sync Your Apps',
        description: 'Connect information from existing applications and workflows.',
      },
      {
        id: 'multiple-connections',
        title: 'Multiple Connections',
        description: 'Bring information together from multiple sources.',
      },
    ],
  },
  {
    id: 'placement',
    index: '04',
    label: 'Placement',
    description: 'Where the information is most useful.',
    capabilities: [
      {
        id: 'desk-or-wall',
        title: 'Desk or Wall',
        description: 'Use the display where the information is most useful.',
      },
    ],
  },
] as const;
