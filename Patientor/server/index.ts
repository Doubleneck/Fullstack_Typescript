
import express from 'express';
import cors from 'cors';
const app = express();
import diagnoseRouter from './src/routes/diagnoses_route';
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});