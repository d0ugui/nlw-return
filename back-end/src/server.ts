import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.send('aloou')
})

app.listen(3333, () => {
  console.log('🚀 Server started at http://localhost:3333')
})