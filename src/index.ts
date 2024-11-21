import {
  createServer,
  ServerResponse,
  IncomingMessage,
} from 'http';

const server = createServer(
  (req: IncomingMessage, res: ServerResponse): void => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, TS-based vanilla Node.js world!\n');
  }
);

server.listen(3000, () => {
  console.log('Server running at http://localhost:1337/\n');
});
