import { useCallback, useState, useMemo } from 'react';

const INITIAL_TABLE_DATA: Record<string, unknown>[] = [
  { id: 'USR-001', gender: 'Female', troubleshoot: 'Network', duration: '12m', feedback: 'Excellent' },
  { id: 'USR-002', gender: 'Male', troubleshoot: 'Hardware', duration: '45m', feedback: 'Fast' },
  { id: 'USR-003', gender: 'Female', troubleshoot: 'Software', duration: '23m', feedback: 'Good' },
  { id: 'USR-004', gender: 'Male', troubleshoot: 'Network', duration: '8m', feedback: 'Excellent' },
];

export function useDashboard() {
  const [data] = useState<Record<string, unknown>[]>(INITIAL_TABLE_DATA);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [issueFilter, setIssueFilter] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    let result = data;
    if (genderFilter) {
      result = result.filter((row) => String(row.gender) === genderFilter);
    }
    if (issueFilter) {
      result = result.filter((row) => String(row.troubleshoot) === issueFilter);
    }
    return result;
  }, [data, genderFilter, issueFilter]);

  const toggleGenderFilter = useCallback(() => {
    setGenderFilter((prev) => (prev === 'Male' ? 'Female' : prev === 'Female' ? null : 'Male'));
  }, []);

  const toggleIssueFilter = useCallback(() => {
    setIssueFilter((prev) =>
      prev === 'Network' ? 'Hardware' : prev === 'Hardware' ? 'Software' : prev === 'Software' ? null : 'Network',
    );
  }, []);

  return {
    data: filteredData,
    genderFilter,
    issueFilter,
    toggleGenderFilter,
    toggleIssueFilter,
  };
}
