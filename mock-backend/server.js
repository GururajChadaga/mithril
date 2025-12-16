// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'PUT' && req.url === '/api/count') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);

        // ⏳ Artificial 2s delay
        setTimeout(() => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ count: data.count }));
        }, 1500);
      } catch (e) {
        res.writeHead(400);
        res.end('Invalid JSON');
      }
    });

    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
