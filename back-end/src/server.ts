import express from 'express';
import { prisma } from './prsima';

const app = express();

app.use(express.json());

app.post('/feedbacks', async (req, res) => {
  const { type, comment } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment
    }
  })

  return res.status(201).json({ data: feedback })
})

app.listen(3333, () => {
  console.log('🚀 Server started at http://localhost:3333')
})