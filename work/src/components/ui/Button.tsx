import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'md' | 'lg';

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
): string {
  return cn(styles.button, styles[variant], styles[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleProps {}

/** Semantic <button> with the approved primary/secondary variants. */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName(variant, size, className)}
      {...rest}
    />
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonStyleProps {
  href: string;
}

/** Semantic <a> styled identically to Button. Used for in-page anchors. */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...rest
}: ButtonLinkProps) {
  return (
    <a href={href} className={buttonClassName(variant, size, className)} {...rest} />
  );
}
