import { useState } from 'react';
import axios from 'axios';
import { DiaryEntry } from './types';

interface DiaryFormProps {
  onDiaryAdded: React.Dispatch<DiaryEntry>;
}

function DiaryForm({ onDiaryAdded }: DiaryFormProps) {
  const [formData, setFormData] = useState({
    date: '',
    weather: '', // Updated to use radio buttons
    visibility: '', // Updated to use radio buttons
    comment: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formError, setFormError] = useState<string | null>(null); // State for error message

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/diaries', formData);
      onDiaryAdded(response.data); // Notify the parent component about the new diary entry
      setFormData({ date: '',weather: '', visibility: '', comment: '' }); // Clear the form (excluding radio buttons)
      setFormError(null); // Clear any previous errors
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
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
          <div>
            <label>
              <input
                type="radio"
                name="weather"
                value="sunny"
                checked={formData.weather === 'sunny'}
                onChange={handleInputChange}
              />
              Sunny
            </label>
            <label>
              <input
                type="radio"
                name="weather"
                value="cloudy"
                checked={formData.weather === 'cloudy'}
                onChange={handleInputChange}
              />
              Cloudy
            </label>
            <label>
              <input
                type="radio"
                name="weather"
                value="rainy"
                checked={formData.weather === 'rainy'}
                onChange={handleInputChange}
              />
              Rainy
            </label>
            <label>
              <input
                type="radio"
                name="weather"
                value="stormy"
                checked={formData.weather === 'stormy'}
                onChange={handleInputChange}
              />
              Stormy
            </label>
            <label>
              <input
                type="radio"
                name="weather"
                value="windy"
                checked={formData.weather === 'windy'}
                onChange={handleInputChange}
              />
              Windy
            </label>
          </div>
        </label>
        <br />
        <label>
          Visibility:
          <div>
            <label>
              <input
                type="radio"
                name="visibility"
                value="great"
                checked={formData.visibility === 'great'}
                onChange={handleInputChange}
              />
              Great
            </label>
            <label>
              <input
                type="radio"
                name="visibility"
                value="good"
                checked={formData.visibility === 'good'}
                onChange={handleInputChange}
              />
              Good
            </label>
            <label>
              <input
                type="radio"
                name="visibility"
                value="ok"
                checked={formData.visibility === 'ok'}
                onChange={handleInputChange}
              />
              Ok
            </label>
            <label>
              <input
                type="radio"
                name="visibility"
                value="poor"
                checked={formData.visibility === 'poor'}
                onChange={handleInputChange}
              />
              Poor
            </label>
          </div>
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