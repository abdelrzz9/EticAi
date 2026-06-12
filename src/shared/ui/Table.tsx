import type { ReactNode } from 'react';

interface Column {
  key: string;
  header: string;
  render?: (item: Record<string, unknown>) => ReactNode;
  className?: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  keyExtractor: (item: Record<string, unknown>) => string;
  className?: string;
}

export function Table({ columns, data, keyExtractor, className }: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-white/10">
      <table className={['w-full text-left', className].filter(Boolean).join(' ')}>
        <thead>
          <tr className="bg-white/5">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={keyExtractor(item)}
              className="border-t border-white/5 hover:bg-white/5 transition-colors"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={['px-4 py-3 text-sm text-gray-300', col.className].filter(Boolean).join(' ')}
                >
                  {col.render ? col.render(item) : String(item[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
