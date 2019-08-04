export function getReportsFromStorage() {
  try {
    const reports = localStorage.getItem('reports');
    const parsedReports = JSON.parse(reports);
    return parsedReports || [];
  } catch {
    return [];
  }
}

export function setReportsToStorage(string) {
  localStorage.setItem('reports', JSON.stringify(string));
}
