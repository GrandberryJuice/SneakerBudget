const http = require('http')

const hostname = "0.0.0.0"
const httpPort = process.env.PORT || 3004

const server = http.createServer(function (req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Authoriztion");
        
        if (req.method === 'Options') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE,GET');
                return res.statusCode(200).json({});
        }
        res.end('Create Server connection\n');
}).listen(httpPort);

server.timeout = 120000
const bodylimit = "100kb"



module.exports = {
        server,
        bodylimit
}