const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res)=>{

    let filePath;

    if(req.url === "/" || req.url === "index.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        filePath = path.join(__dirname, "views", "index.html");
        fs.readFile(filePath, "utf-8", (err,data)=>{
            if(err) console.log(err);
            res.end(data);
        }) 
    }

})

server.listen(PORT, () => console.log(`server is running on ${PORT}`));