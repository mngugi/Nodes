// thisNode.js

const http = require('http');
const dt = require('./DateTimeModule.js')
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("The date and time are currently: " + dt.DateTimeModule());
  res.end('Global Warming!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

