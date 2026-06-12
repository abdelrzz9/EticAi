import { Filter } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';
import { Table } from '../../../shared/ui/Table';
import { Badge } from '../../../shared/ui/Badge';
import { DASHBOARD } from '../../../core/constants/app';
import { useDashboard } from '../hooks/useDashboard';
import graph2 from '../../../assets/graph2.png';
import graph1 from '../../../assets/grapfh1.png';

const columns = [
  { key: 'id', header: 'User ID' },
  { key: 'gender', header: 'Gender' },
  {
    key: 'troubleshoot',
    header: 'Specific Troubleshoot',
    render: (row: Record<string, unknown>) => (
      <Badge variant="info">{String(row.troubleshoot)}</Badge>
    ),
  },
  { key: 'duration', header: 'Call Duration' },
  { key: 'feedback', header: 'Feedback' },
];

export function DashboardPage() {
  const { data, genderFilter, issueFilter, toggleGenderFilter, toggleIssueFilter } = useDashboard();

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DASHBOARD.STATS.map((stat) => (
          <Card key={stat.label} variant="bordered" className="text-center">
            <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
            <p className="text-xl md:text-2xl font-bold text-white mt-1">{stat.value}</p>
            <p
              className={`text-xs mt-1 ${
                stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {stat.change}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card variant="glass" className="flex items-center justify-center p-2 md:p-4">
          <img
            src={graph2}
            alt="Chart 2"
            className="w-full max-w-sm h-auto object-contain opacity-80"
          />
        </Card>
        <Card variant="glass" className="flex items-center justify-center p-2 md:p-4">
          <img
            src={graph1}
            alt="Chart 1"
            className="w-full max-w-sm h-auto object-contain opacity-80"
          />
        </Card>
      </div>

      <Card variant="glass">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">{DASHBOARD.TABLE_TITLE}</h3>
            <p className="text-sm text-text-muted mt-1">{DASHBOARD.TABLE_SUBTITLE}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={toggleGenderFilter}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                genderFilter
                  ? 'bg-accent-blue text-white'
                  : 'text-white bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <Filter size={14} />
              {DASHBOARD.FILTER_GENDER}
              {genderFilter && <span className="ml-1 opacity-70">({genderFilter})</span>}
            </button>
            <button
              onClick={toggleIssueFilter}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                issueFilter
                  ? 'bg-accent-blue text-white'
                  : 'text-white bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <Filter size={14} />
              {DASHBOARD.FILTER_ISSUE}
              {issueFilter && <span className="ml-1 opacity-70">({issueFilter})</span>}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table
            columns={columns}
            data={data}
            keyExtractor={(row) => String(row.id)}
          />
        </div>
      </Card>
    </div>
  );
}
