import { Card } from '../../../shared/ui/Card';
import { SETTINGS_PAGE } from '../../../core/constants/app';

export function SettingsPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Card variant="glass">
        <div className="flex flex-col items-center text-center py-12">
          <h2 className="text-2xl font-semibold text-white">{SETTINGS_PAGE.TITLE}</h2>
          <p className="text-text-muted mt-3 max-w-md">{SETTINGS_PAGE.DESCRIPTION}</p>
          <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-text-muted text-sm">{SETTINGS_PAGE.COMING_SOON}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
