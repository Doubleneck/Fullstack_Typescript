import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { DiaryEntry } from './types';  



function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    axios.get<DiaryEntry[]>('http://localhost:3000/api/diaries').then(response => {
      setDiaries(response.data);
    });
  }, []);
  
  return (
    <div>
      <h1>Diary Entries:</h1>
      <ul>
        {diaries.map(diary => (
          <li key={diary.id} >
            <h3>{diary.date}</h3>
            <p>Visibility: {diary.visibility}</p>
            <p>Weather: {diary.weather}</p>
            <p>Comment: {diary.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
