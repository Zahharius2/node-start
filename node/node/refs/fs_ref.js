const fs = require("fs");
const path = require("path");

// // создать директорию notes
// fs.mkdir(path.join(__dirname, "notes"), err => {
//     if (err) throw err;
//     console.log("Folder created");
// });

// // создать mynotes.txt и записать туда "Hello world "
// fs.writeFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "Hello world ",
//     (err) => {
//         if (err) throw err;
//         console.log("File created");

//         // дописать в файл что-то из разряда "I love Node.js"
//         fs.appendFile(
//             path.join(__dirname, "notes", "mynotes.txt"),
//             "I love Node.js",
//             (err) => {
//                 if (err) throw err;
//                 console.log("File updated");
//             }
//         );

//         // прочесть содержимое файла и кинуть его в консоль
//         fs.readFile(
//             path.join(__dirname, "notes", "mynotes.txt"),
//             "utf8",
//             (err, data) => {
//                 if (err) throw err;
//                 console.log(data);
//             }
//         );

//         // переименовать mynotes.txt в notes.txt
//         fs.rename(
//             path.join(__dirname, "notes", "mynotes.txt"),
//             path.join(__dirname, "notes", "notes.txt"),
//             err => {
//                 if (err) throw err;
//                 console.log("File renamed");
//             }
//         );
//     }
// );

fs.mkdir(path.join(__dirname, "test"), err => {
    if (err) throw err;
    console.log("Folder created");
});

fs.writeFile(
    path.join(__dirname, "test", "test.txt"),
    "SPTV",
    (err) => {
        if (err) throw err;
        console.log("File created");

        fs.appendFile(
            path.join(__dirname, "test", "test.txt"),
            "22",
            (err) => {
                if (err) throw err;
                console.log("File updated");
            }
        );

        fs.rename(
            path.join(__dirname, "test", "test.txt"),
            path.join(__dirname, "test", "SPTV22.txt"),
            err => {
                if (err) throw err;
                console.log("File renamed");
            }
        );
    }
);

