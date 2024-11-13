const os = require("os");

// выводит инфу о системе
console.log(os.platform());
// выводит инфу о архитектуре
console.log(os.arch());
// выводит инфу о процессоре
console.log(os.cpus());
// выводит инфу о памяти
console.log(os.totalmem());
// выводит инфу о свободной памяти
console.log(os.freemem());
// выводит инфу о домене пользователя
console.log(os.homedir());
// выводит инфу о времени работы системы
console.log(os.uptime());
