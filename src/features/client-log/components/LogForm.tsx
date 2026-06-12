import { useState } from 'react';
import { CLIENT_LOG, CLIENT_LOG_PAGE } from '../../../core/constants/app';
import { Button } from '../../../shared/ui/Button';
import { Input } from '../../../shared/ui/Input';
import type { LogType, FeedbackType, ClientFormData } from '../../../core/types/client-log';

interface LogFormProps {
  onSubmit: (data: ClientFormData) => void;
  onCancel: () => void;
}

export function LogForm({ onSubmit, onCancel }: LogFormProps) {
  const [formData, setFormData] = useState<ClientFormData>({
    clientId: '',
    type: 'Technical' as LogType,
    specificTroubleshoot: '',
    callDuration: '',
    feedback: 'Neutral' as FeedbackType,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientId || !formData.specificTroubleshoot) return;
    onSubmit(formData);
    setFormData({
      clientId: '',
      type: 'Technical' as LogType,
      specificTroubleshoot: '',
      callDuration: '',
      feedback: 'Neutral' as FeedbackType,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        id="clientId"
        name="clientId"
        label={CLIENT_LOG_PAGE.FIELDS.CLIENT_ID}
        value={formData.clientId}
        onChange={handleChange}
        placeholder={CLIENT_LOG_PAGE.PLACEHOLDERS.CLIENT_ID}
        required
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="type" className="text-sm font-semibold text-white ml-1">
          {CLIENT_LOG_PAGE.FIELDS.TYPE}
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full px-3 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
        >
          {CLIENT_LOG.TYPES.map((t) => (
            <option key={t} value={t} className="bg-bg-darker">
              {t}
            </option>
          ))}
        </select>
      </div>

      <Input
        id="specificTroubleshoot"
        name="specificTroubleshoot"
        label={CLIENT_LOG_PAGE.FIELDS.TROUBLESHOOT}
        value={formData.specificTroubleshoot}
        onChange={handleChange}
        placeholder={CLIENT_LOG_PAGE.PLACEHOLDERS.TROUBLESHOOT}
        required
      />

      <Input
        id="callDuration"
        name="callDuration"
        label={CLIENT_LOG_PAGE.FIELDS.DURATION}
        value={formData.callDuration}
        onChange={handleChange}
        placeholder={CLIENT_LOG_PAGE.PLACEHOLDERS.DURATION}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="feedback" className="text-sm font-semibold text-white ml-1">
          {CLIENT_LOG_PAGE.FIELDS.FEEDBACK}
        </label>
        <select
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="w-full px-3 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
        >
          {CLIENT_LOG.FEEDBACK_OPTIONS.map((f) => (
            <option key={f} value={f} className="bg-bg-darker">
              {f}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 mt-2">
        <Button type="submit" className="flex-1">
          {CLIENT_LOG_PAGE.SUBMIT}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel} className="flex-1">
          {CLIENT_LOG_PAGE.CANCEL}
        </Button>
      </div>
    </form>
  );
}
