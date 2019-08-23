export function getReports() {
  return fetch('/api/reports').then(res => res.json());
}

export function postReport(data) {
  return fetchReport('POST', data);
}

export function patchKit(data, id) {
  //TODO write function >>> return fetchKit(('PATCH', data, id))
}

function fetchReport(method, data, id = '') {
  return fetch('/api/reports/' + id, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
