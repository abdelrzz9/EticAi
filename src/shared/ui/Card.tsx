import type { ReactNode } from 'react';
import { cn } from '../../core/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'bordered';
}

const variantStyles: Record<string, string> = {
  default: 'bg-white/5',
  glass: 'bg-white/5 backdrop-blur-md',
  bordered: 'bg-white/5 border border-white/10',
};

export function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
