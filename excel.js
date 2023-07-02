const XLSX = require("xlsx");
const deleteId = require("./deleteId");
// Загрузка файла Excel
const workbook = XLSX.readFile("./products.xlsx");

// Получение списка названий листов в таблице
const sheetNames = workbook.SheetNames;

// Чтение данных из первого листа
const worksheet = workbook.Sheets[sheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
// Обработка данных
// jsonData.forEach((row) => {
//   console.log(row);
// });
const result = [];

jsonData.forEach((row) => {
  const data = row.slice(1);

  if (data.some((item) => deleteId.includes(item))) {
    const firstElement = row[0];
    result.push(firstElement);
  }
});

console.log(result);
