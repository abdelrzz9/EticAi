import type { InputHTMLAttributes } from 'react';
import { cn } from '../../core/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-white ml-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          'w-full px-3 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400',
          'focus:outline-none focus:border-cyan-400 focus:bg-white/10',
          'transition-all duration-200',
          error && 'border-red-500',
          className,
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-400 ml-1">{error}</span>}
    </div>
  );
}
