const path = require("path");

console.log(__filename);  // выводит полный путь к файлу
console.log(path.basename(__filename));  // имя файла с его расширением
console.log(path.dirname(__filename));  // директория но без названия файла
console.log(path.extname(__filename));  // расширение файла (например, .jpg)

console.log(path.parse(__filename));  // разбирает путь на составляющие (root, dir, base, ext, name)

console.log(path.join(__dirname, "test", "second.html"));  // объединяет и делает нормальный путь
console.log(path.resolve(__dirname, "test", "second.html"));  // создаёт мегапуть начиная с этой директории