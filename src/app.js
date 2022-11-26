let fs = require('fs');
let textract = require('textract');
let args = process.argv.slice(2).toString();
let txt_name = args.split(".");

textract.fromFileWithPath('./' + args, () => extractFile().catch(console.error))

async function extractFile(error, text) {
    if (error)
        throw new Error("File does not exist at this path")
    fs.appendFile(txt_name[0] + '.txt', text, (err) => {
        if (err)
            throw ("Text file Not created")
        console.log({ message: "Text file created" })
    })
    console.log(text)
}