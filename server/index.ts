import express from 'express';
import calculateBmi from './bmiCalculator';
import { calculator } from './calculator';
import  calculateExercises from './exerciseCalculator';
const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
    res.send('pong');
});

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
    const height = Number(_req.query.height);
    const weight = Number(_req.query.weight);

    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({ error: 'malformatted parameters' });
        return;
    }
    return res.json({
        weight,
        height,
        bmi: calculateBmi(height, weight)
    });
});

app.post('/calculate', (_req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
    const { value1, value2, op } = _req.body;
    if ( !value1 || !value2 ||isNaN(Number(value1))||isNaN(Number(value2) ) ) {
        return res.status(400).send({ error: '...'});
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculator(Number(value1), Number(value2), op);
    return res.send({ result });
});  

app.post('/exercises', (req, res) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment   
      const { daily_exercises, target } = JSON.parse(JSON.stringify(req.body));
  
      if (!daily_exercises || !target) {
        return res.status(400).send({ error: 'parameters missing' });
      }
  
      if (!Array.isArray(daily_exercises) || daily_exercises.length === 0) {
        return res.status(400).send({ error: 'malformatted parameters' });
      }
  
      if (typeof target !== 'number' || isNaN(target)) {
        return res.status(400).send({ error: 'malformatted parameters' });
      }
  
      if (daily_exercises.some((value) => typeof value !== 'number' || isNaN(value))) {
        return res.status(400).send({ error: 'malformatted parameters' });
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
      const target_and_daily_exercises = [target, ...daily_exercises];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment , @typescript-eslint/no-unsafe-argument
      const result = calculateExercises(target_and_daily_exercises);
  
      return res.send({ result });
    } catch (error) {
      return res.status(400).send({ error: 'Invalid JSON format' });
    }
  });

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});