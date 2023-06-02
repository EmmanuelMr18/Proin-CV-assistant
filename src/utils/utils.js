export function importText(event) {
  return new Promise((resolve) => {
    const reader = new window.FileReader();
    reader.addEventListener('load', () => {
      resolve(reader.result), false;
    });
    reader.readAsText(event.target.files[0]);
  });
}
export function readFile(file) {
  return new Promise((resolve) => {
    const reader = new window.FileReader();
    reader.addEventListener('load', () => {
      resolve(reader.result), false;
    });
    reader.readAsDataURL(file);
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
export async function importData(event) {
  const dataImported = await importText(event);
  const dataObj = JSON.parse(dataImported);
  return dataObj;
}
export function moveArrayItem(input, from, to) {
  let numberOfDeletedElm = 1;
  const elm = input.splice(from, numberOfDeletedElm)[0];
  numberOfDeletedElm = 0;
  input.splice(to, numberOfDeletedElm, elm);
  return input;
}
