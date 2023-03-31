// Import the required modules
const http = require('http');
const fs = require('fs');

// Define the port number
const port = 3000;

// Create the server
const server = http.createServer((request, response) => {
  // Handle the request
  if (request.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.write('500 Internal Server Error');
        response.end();
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);
      response.end();
    });
  } else if (request.url === '/about') {
    fs.readFile('about.html', 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.write('500 Internal Server Error');
        response.end();
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);
      response.end();
    });
  } else if (request.url === '/style.css') {
    fs.readFile('style.css', 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.write('500 Internal Server Error');
        response.end();
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.write(data);
      response.end();
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('<h1>404 Not Found</h1>');
    response.write('<p>The page you are looking for cannot be found</p>');
    response.end();
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
