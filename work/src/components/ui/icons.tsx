import type { SVGProps } from 'react';

export type IconName =
  | 'battery'
  | 'bolt'
  | 'eye'
  | 'arrowRight'
  | 'menu'
  | 'close';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  /** Rendered size in px; defaults to 24. */
  size?: number;
}

/**
 * Single icon strategy: minimal inline line icons, 24×24 viewBox,
 * currentColor stroke. No icon library, no mixed visual styles.
 * Icons are decorative; color/meaning is always carried by text.
 */
export function Icon({ name, size = 24, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {renderIcon(name)}
    </svg>
  );
}

function renderIcon(name: IconName) {
  switch (name) {
    case 'battery':
      return (
        <>
          <rect x="2" y="7" width="17" height="10" rx="2" />
          <path d="M22 11v2" />
          <path d="M6 11v2" />
          <path d="M10 11v2" />
        </>
      );
    case 'bolt':
      return <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />;
    case 'eye':
      return (
        <>
          <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
          <circle cx="12" cy="12" r="2.75" />
        </>
      );
    case 'arrowRight':
      return (
        <>
          <path d="M4 12h16" />
          <path d="m14 6 6 6-6 6" />
        </>
      );
    case 'menu':
      return (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      );
    case 'close':
      return (
        <>
          <path d="m6 6 12 12" />
          <path d="m18 6-12 12" />
        </>
      );
  }
}
