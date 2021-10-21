const http = require('http');
const host = "http://localhost";
const port = 3000;
const stats = require('./MemoriaRamUsada.js');

    console.log(http);
http.createServer((req, resp) => {
    let url = req.url;

    if(url === "/stats"){
        resp.end(JSON.stringify(stats, null, 2));
    } else {
        resp.end('<h1>Aprendendo sobre Node.js</h1>');
    }
}).listen(port, () => console.log(`Server is running em ${host}:${port}, ${stats}`));



