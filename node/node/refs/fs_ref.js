const fs = require('fs')
const path = require('path')


fs.mkdir(path.join(__dirname, 'notes'), err =>{
    if (err) throw err

    console.log('papka bila sozdana')
})

fs.writeFile(
    path.join(__dirname,'notes','mynotes.txt'),
    'hello world',
    (err)=>{
        if (err) throw err
        console.log('file bil sozdan')

        fs.appendFile(
            path.join(__dirname, 'notes','mynotes.txt'),
            ' From append file',
            err => {
                if (err) throw err
                console.log('file bil izmenen')

                fs.readFile(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    'utf-8',
                    (err,data) =>{
                        if(err) throw err
                        console.log(data)
                    }
                )
            }
        )
    }
)