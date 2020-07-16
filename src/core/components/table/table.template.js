const CODES = {
  A: 65,
  Z: 90
}

function createRow(content, index) {
  const resizer = index ? `<div class="row-resize" data-resize="row"></div>` : '';
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index}
        ${resizer}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function createCol(char, i) {
  return `
    <div class="column" data-type="resizable" data-col="${i}">
      ${char}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createCell(data, i) {
  return `
    <div class="cell" contenteditable data-col="${i}">${data}
    </div>
  `
}
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('');
  rows.push(createRow(cols, ''));
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map((el, j) => i + j)
        .map(createCell)
        .join('')
    rows.push(createRow(cells, i + 1))
  }
  return rows.join('')
}
