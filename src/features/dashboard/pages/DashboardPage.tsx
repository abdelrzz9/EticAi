import { Filter } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';
import { Table } from '../../../shared/ui/Table';
import { Badge } from '../../../shared/ui/Badge';
import graph2 from '../../../assets/graph2.png';
import graph1 from '../../../assets/grapfh1.png';

const stats = [
  { label: 'Total Calls', value: '1,234', change: '+12%' },
  { label: 'Resolved', value: '1,120', change: '+8%' },
  { label: 'Avg. Duration', value: '12m', change: '-2%' },
  { label: 'Satisfaction', value: '94%', change: '+5%' },
];

const tableData: Record<string, unknown>[] = [
  { id: 'USR-001', gender: 'Female', troubleshoot: 'Network', duration: '12m', feedback: 'Excellent' },
  { id: 'USR-002', gender: 'Male', troubleshoot: 'Hardware', duration: '45m', feedback: 'Fast' },
  { id: 'USR-003', gender: 'Female', troubleshoot: 'Software', duration: '23m', feedback: 'Good' },
  { id: 'USR-004', gender: 'Male', troubleshoot: 'Network', duration: '8m', feedback: 'Excellent' },
];

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
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} variant="bordered" className="text-center">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            <p className={`text-xs mt-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {stat.change}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card variant="glass" className="flex items-center justify-center p-4">
          <img
            src={graph2}
            alt="Chart 2"
            className="w-full max-w-sm h-auto object-contain opacity-80"
          />
        </Card>
        <Card variant="glass" className="flex items-center justify-center p-4">
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
            <h3 className="text-lg font-semibold text-white">Highest Customer Reviews</h3>
            <p className="text-sm text-gray-400 mt-1">
              A detailed list of top-rated service interactions.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Filter size={14} />
              Filter by Gender
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Filter size={14} />
              Filter by Issue
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table
            columns={columns}
            data={tableData}
            keyExtractor={(row) => String(row.id)}
          />
        </div>
      </Card>
    </div>
  );
}
