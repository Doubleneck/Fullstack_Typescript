import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { DiaryEntry } from './types';  
import DiaryForm from './DiaryForm';



function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    axios.get<DiaryEntry[]>('http://localhost:3000/api/diaries').then(response => {
      setDiaries(response.data);
    });
  }, []);

  const addDiaryEntry = (newDiary: DiaryEntry) => {
    // Update the state with the new diary entry
    setDiaries([...diaries, newDiary]);
  };
  
  return (
    <div>
      <DiaryForm onDiaryAdded={addDiaryEntry} />
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
