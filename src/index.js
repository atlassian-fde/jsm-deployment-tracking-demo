const http = require('node:http');
const { calculateInvoice, isCardSupported } = require('./billing');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', version: process.env.APP_VERSION || 'dev' }));
  }
  res.writeHead(404);
  res.end();
});

if (require.main === module) {
  server.listen(process.env.PORT || 3000);
}

module.exports = { server, calculateInvoice, isCardSupported };
