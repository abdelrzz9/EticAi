import { Modal } from '../../../shared/ui/Modal';
import { LogForm } from '../components/LogForm';
import { CLIENT_LOG_PAGE } from '../../../core/constants/app';
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
            <button className="px-4 py-2 rounded-lg text-xs md:text-sm text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
              {CLIENT_LOG_PAGE.FILTER_BY}
            </button>
            <button className="px-4 py-2 rounded-lg text-xs md:text-sm text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
              {CLIENT_LOG_PAGE.SORT_BY}
            </button>
          </div>
          <button
            onClick={onFormOpen}
            className="px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-cyan-400 to-accent-blue hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
          >
            {CLIENT_LOG_PAGE.ADD_SESSION}
          </button>
        </div>

        <hr className="border-0 h-px bg-white/20" />

        {logs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-text-muted text-lg">No call sessions yet.</p>
            <p className="text-text-muted text-sm mt-2">Click &quot;Add a Call Session&quot; to create one.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {CLIENT_LOG_PAGE.TABLE_HEADERS.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3.5 text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {logs.map((log, index) => (
                  <tr
                    key={`${log.clientId}-${index}`}
                    className="border-t border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-3.5 text-sm font-mono text-blue-400 whitespace-nowrap">
                      {log.clientId}
                    </td>
                    <td className="px-4 py-3.5 text-sm text-gray-300 whitespace-nowrap">{log.type}</td>
                    <td className="px-4 py-3.5 text-sm text-gray-300">{log.specificTroubleshoot}</td>
                    <td className="px-4 py-3.5 text-sm text-gray-300 whitespace-nowrap">
                      {log.callDuration || '--'}
                    </td>
                    <td className="px-4 py-3.5 text-sm text-gray-300 whitespace-nowrap">
                      {log.feedback}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal isOpen={isFormOpen} onClose={onFormClose} title={CLIENT_LOG_PAGE.MODAL_TITLE}>
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
