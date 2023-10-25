import { useState } from 'react';
import axios from 'axios';

interface DiaryFormProps {
    onDiaryAdded: React.Dispatch<never>;
  }
  
function DiaryForm({ onDiaryAdded }: DiaryFormProps) {
  const [formData, setFormData] = useState({
    date: '',
    weather: '',
    visibility: '',
    comment: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      console.log('formData:', formData);  
      const response = await axios.post('http://localhost:3000/api/diaries', formData);
      onDiaryAdded(response.data); // Notify the parent component about the new diary entry
      setFormData({ date: '', weather: '', comment: '', visibility: '' }); // Clear the form
    } catch (error) {
      console.error('Error posting diary entry:', error);
    }
  };
  
  return (
    <div>
      <h2>Add a New Diary Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>
            Date:
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Weather:
          <input type="text" name="weather" value={formData.weather} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Visibility:
          <input type="text" name="visibility" value={formData.visibility} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Comment:
          <textarea name="comment" value={formData.comment} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}
  
export default DiaryForm;