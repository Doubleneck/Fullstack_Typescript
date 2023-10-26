import { useState } from 'react';
import axios from 'axios';
import { DiaryEntry } from './types';

interface DiaryFormProps {
    onDiaryAdded: React.Dispatch<DiaryEntry>;
  }
  
function DiaryForm({ onDiaryAdded }: DiaryFormProps) {
  const [formData, setFormData] = useState({
    date: '',
    weather: '',
    visibility: '',
    comment: '',
  });
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const [formError, setFormError] = useState<string | null>(null); // State for error message

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      console.log('formData:', formData);  
      const response = await axios.post('http://localhost:3000/api/diaries', formData);
      onDiaryAdded(response.data); // Notify the parent component about the new diary entry
      setFormData({ date: '', weather: '', comment: '', visibility: '' }); // Clear the form
      setFormError(null); // Clear any previous errors
      // eslint-disable-next-line @typescript-eslint/no-explicit-any 
    } catch (error:any) {
      console.error('Error posting diary entry:', error);
      setFormError(error.response.data); // Set the error message
    }
  };
  
  return (
    <div>
      <h2>Add a New Diary Entry</h2>
      {formError && <div style={{ color: 'red' }}>{formError}</div>}
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
          <input name="comment" value={formData.comment} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}
  
export default DiaryForm;