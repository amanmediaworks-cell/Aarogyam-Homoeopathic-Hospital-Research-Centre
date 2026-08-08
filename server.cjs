const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname);
const ALT_PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  let filePath = path.join(PUBLIC_DIR, reqUrl);
  let ext = path.extname(filePath).toLowerCase();

  // Try root directory first
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Try public subdirectory
      let altFilePath = path.join(ALT_PUBLIC_DIR, reqUrl);
      fs.stat(altFilePath, (errAlt, statsAlt) => {
        if (errAlt || !statsAlt.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1>');
        } else {
          serveFile(altFilePath, res, ext);
        }
      });
    } else {
      serveFile(filePath, res, ext);
    }
  });
});

function serveFile(filePath, res, ext) {
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      res.end(data);
    }
  });
}

server.listen(PORT, () => {
  console.log(`
==================================================
 Aarogyam Homoeopathic Hospital Website Running!
 Local URL: http://localhost:3000
==================================================
  `);
});
