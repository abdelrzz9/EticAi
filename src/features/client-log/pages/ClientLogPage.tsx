import { Modal } from '../../../shared/ui/Modal';
import { LogForm } from '../components/LogForm';
import type { ClientLogEntry, ClientFormData } from '../../../core/types/client-log';

interface LogTableProps {
  logs: ClientLogEntry[];
  isFormOpen: boolean;
  onFormOpen: () => void;
  onFormClose: () => void;
  onAddLog: (data: ClientFormData) => void;
}

export function ClientLogPage({ logs, isFormOpen, onFormOpen, onFormClose, onAddLog }: LogTableProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8 h-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg text-sm text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
              Filter By
            </button>
            <button className="px-4 py-2 rounded-lg text-sm text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
              Sort By: Relevance
            </button>
          </div>
          <button
            onClick={onFormOpen}
            className="px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
          >
            Add a Call Session
          </button>
        </div>

        <hr className="border-0 h-px bg-white/20" />

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5">
                {['Client ID', 'Type', 'Specific Troubleshoot', 'Call Duration', 'Feedback'].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3.5 text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr
                  key={`${log.clientId}-${index}`}
                  className="border-t border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-3.5 text-sm font-mono text-blue-400">{log.clientId}</td>
                  <td className="px-4 py-3.5 text-sm text-gray-300">{log.type}</td>
                  <td className="px-4 py-3.5 text-sm text-gray-300">{log.specificTroubleshoot}</td>
                  <td className="px-4 py-3.5 text-sm text-gray-300">{log.callDuration}</td>
                  <td className="px-4 py-3.5 text-sm text-gray-300">{log.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isFormOpen} onClose={onFormClose} title="Add New Call Session">
        <LogForm
          onSubmit={(data) => {
            onAddLog(data);
            onFormClose();
          }}
          onCancel={onFormClose}
        />
      </Modal>
    </div>
  );
}
