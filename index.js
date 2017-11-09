var http =  require("http");
var fs = require("fs");
var EventEmitter = require("events").EventEmitter;


// var emitter = new EventEmitter();
// emitter.on("beforeCommand", function () {
//     fs.readFile("index.html", 'utf-8',function (err, data) {
//         if(err) throw err;
//         data;
//     });
// });

var server = http.createServer();

// var header = fs.readFileSync('template/header.html','utf-8');
// var footer = fs.readFileSync('template/footer.html','utf-8');


    server.on('request', function (req, res) {

            // res.setHeader("Content-Type", "text/html; charset=utf-8");
            // res.write(header);

            if(req.method === 'GET' && req.url === '/'){
                fs.readFile("index.html", function (err, content) {
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    res.write(content);
                    res.end();
                });


            }else{

                fs.readFile("images/template-404-error-page-preview.jpg", function (err, content) {
                    if(err) throw err;
                    res.setHeader("Content-Type", "image/jpg; ");
                    res.statusCode = 404;
                    res.end(content);

                });
            }

            // res.write(footer);
            // res.end();

    });


server.listen(9876);