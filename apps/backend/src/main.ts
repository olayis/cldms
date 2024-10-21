import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/api/message', (req, res) => {
  res.send({ message: 'Hello World!' });
});

export default app;
