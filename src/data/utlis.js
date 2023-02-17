export function importText(event) {
  return new Promise((resolve) => {
    const reader = new window.FileReader();
    reader.addEventListener('load', () => {
      resolve(reader.result), false;
    });
    reader.readAsText(event.target.files[0]);
  });
}
export function exportObj(dataObj, filename) {
  const dataStringified = JSON.stringify(dataObj, undefined, 4);
  const blob = new Blob([dataStringified], { type: 'text/json' });

  const a = document.createElement('a');
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.click();
}
