import fs from 'node:fs';
import http from 'node:http';
import { URL } from 'node:url';

const port = 8080;
const directory = '/public';
const requestListener = (req, res) => {
  res.end('Server running...');
};
const server = http.createServer(requestListener);

server.listen(port);
