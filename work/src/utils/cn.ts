/**
 * Joins class names, skipping falsy values.
 * Small but genuinely reused by every primitive with optional className.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
