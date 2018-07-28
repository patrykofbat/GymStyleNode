import * as http from "http";


let json = {
    patryk: "imie",
    liczba: 2,
    heloo: [1, 2, "arrr"]
}

http.createServer(function (request, response) {

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end(JSON.stringify(json));
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');