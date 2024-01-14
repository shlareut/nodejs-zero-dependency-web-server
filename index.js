import fs from 'node:fs';
import http from 'node:http';
import { URL } from 'node:url';

const hostname = 'localhost';
const port = 8080;
const directory = '/public';

// Create the HTTP server and specify a callback function to handle requests.
const server = http.createServer((req, res) => {
  // Set the response header with the content type.
  res.setHeader('Content-Type', 'text/html');

  // Write the response content.
  res.write('<h1>Hello, Node.js!</h1>');
  res.write('<p>This is a simple HTTP server.</p>');

  // End the response.
  res.end();
});

// Start the server and make it listen on the specified hostname and port.
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
