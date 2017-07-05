let fs = require('fs');
let textract = require('textract');
let args = process.argv.slice(2).toString();
let txt_name = args.split(".");

textract.fromFileWithPath('./' + args, (error, text) => {
    if (error) {
        console.log({ message: "File does not exist at this path" })
    } else {
        fs.appendFile(txt_name[0] + '.txt', text, (err) => {
            if (err) {
                console.log({ message: "Text file Not created" })
            } else {
                console.log({ message: "Text file created" })
            }
        })
        console.log(text)
    }
})
