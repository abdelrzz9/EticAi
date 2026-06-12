import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
}: SearchInputProps) {
  return (
    <div className="relative flex items-center">
      <Search
        size={18}
        className="absolute left-3 text-gray-400 pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-xs pl-10 pr-4 py-2 rounded-lg border border-blue-200/30 bg-white/20 text-white placeholder-gray-400 backdrop-blur-md focus:outline-none focus:border-blue-400/50 transition-all text-sm"
      />
    </div>
  );
}
