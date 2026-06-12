import { cn } from '../../core/utils/cn';

interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-12 h-12 text-lg',
};

export function Avatar({ initials, size = 'md', className }: AvatarProps) {
  return (
    <div
      className={cn(
        'rounded-full bg-blue-600 flex items-center justify-center font-semibold text-white',
        sizeStyles[size],
        className,
      )}
    >
      {initials}
    </div>
  );
}
