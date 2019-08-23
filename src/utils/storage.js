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

export function getKitsFromStorage() {
  try {
    const kits = localStorage.getItem('kits');
    const parsedKits = JSON.parse(kits);
    return parsedKits || [];
  } catch {
    return [];
  }
}

export function setKitsToStorage(string) {
  localStorage.setItem('kits', JSON.stringify(string));
}
