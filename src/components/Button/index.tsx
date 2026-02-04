import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type VerseButtonVariant =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'text'
  | 'link'
  | 'ghost'
  | 'danger'
  | 'success'
  | 'gradient';

export type VerseButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface VerseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button text content */
  children: React.ReactNode;
  /** Button variant style */
  variant?: VerseButtonVariant;
  /** Button size */
  size?: VerseButtonSize;
  /** Icon before the label */
  leadingIcon?: React.ReactNode;
  /** Icon after the label */
  trailingIcon?: React.ReactNode;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Whether the button should fill the parent width */
  fullWidth?: boolean;
}

const variantStyles: Record<VerseButtonVariant, string> = {
  primary: 'bg-verse-blue text-white hover:bg-verse-blue/90',
  secondary: 'bg-verse-pink text-white hover:bg-verse-pink/90',
  default: 'bg-surface text-text-primary border border-border hover:bg-surface-elevated',
  text: 'bg-transparent text-text-primary hover:bg-surface-muted',
  link: 'bg-transparent text-verse-blue hover:underline',
  ghost: 'bg-transparent text-text-primary border border-border hover:bg-surface-muted',
  danger: 'bg-error-100 text-white hover:bg-error-100/90',
  success: 'bg-success-100 text-white hover:bg-success-100/90',
  gradient: 'bg-verse-gradient text-white hover:opacity-90',
};

const sizeStyles: Record<VerseButtonSize, string> = {
  sm: 'h-8 px-s text-label-sm',
  md: 'h-10 px-m text-label',
  lg: 'h-12 px-l text-label-lg',
  xl: 'h-14 px-xl text-label-lg',
};

const iconSizes: Record<VerseButtonSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-[18px] h-[18px]',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
};

/**
 * Verse Design System Button
 *
 * A versatile button component with multiple variants, sizes, and states.
 *
 * @example
 * ```tsx
 * <VerseButton variant="primary" size="md">
 *   Connect Wallet
 * </VerseButton>
 * ```
 */
export const VerseButton = React.forwardRef<HTMLButtonElement, VerseButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      leadingIcon,
      trailingIcon,
      loading = false,
      fullWidth = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={twMerge(
          clsx(
            // Base styles
            'inline-flex items-center justify-center gap-s rounded-md font-medium transition-all duration-150',
            'focus:outline-none focus:ring-2 focus:ring-verse-blue focus:ring-offset-2 focus:ring-offset-background',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            // Variant styles
            variantStyles[variant],
            // Size styles
            sizeStyles[size],
            // Full width
            fullWidth && 'w-full',
            // Custom class
            className
          )
        )}
        {...props}
      >
        {loading ? (
          <svg
            className={clsx('animate-spin', iconSizes[size])}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : leadingIcon ? (
          <span className={iconSizes[size]}>{leadingIcon}</span>
        ) : null}
        {children}
        {trailingIcon && !loading && (
          <span className={iconSizes[size]}>{trailingIcon}</span>
        )}
      </button>
    );
  }
);

VerseButton.displayName = 'VerseButton';

export default VerseButton;
