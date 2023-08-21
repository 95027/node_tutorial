
/* const os = require("os");

console.log(os.type());
console.log(os.version());
console.log(os.homedir()); */

/* console.log(__dirname);
console.log(__filename); */

/* const path = require('path');
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); */

/* const {add, div, sub,mul} = require("./math");
console.log(div(2,3));
console.log(add(2,3));
console.log(mul(2,3));
console.log(sub(2,3)); */

// read and write files;



/* const fs = require('fs');
const path = require('path');

// read => write => append is executing;
fs.readFile(path.join(__dirname, "files", "text.txt"), (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
});
fs.writeFile(path.join(__dirname, "files", "text2.txt"),"creating new file", (err)=>{
    if(err) throw err;
    console.log("file is created");
    fs.appendFile(path.join(__dirname, "files", "text2.txt"), "\n\nappeding", (err)=>{
        if(err) throw err;
        console.log("appended");
        fs.rename(path.join(__dirname, "files", "text2.txt"),path.join(__dirname, "files", "text33.txt"),(err)=>{
            if(err) throw err;
            console.log("renamed");
        })
    }) 
});

console.log("hello"); */


const fsPromises = require("fs").promises;
const path = require("path");

const fileOperations = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "text.txt"), "utf-8");
        console.log(data);
        //await fsPromises.unlink(path.join(__dirname, "files", "text2.txt"));
        await fsPromises.writeFile(path.join(__dirname, "files", "text3.txt"), data);
        await fsPromises.appendFile(path.join(__dirname, "files", "text3.txt"), "\nthis is from appending");
        await fsPromises.rename(path.join(__dirname, "files", "text3.txt"), path.join(__dirname, "files", "text33.txt"));

        const newData = await fsPromises.readFile(path.join(__dirname, "files", "text33.txt"), "utf-8");
        console.log(newData);
        
    } catch (error) {
        console.error(error);
    }
}

fileOperations();