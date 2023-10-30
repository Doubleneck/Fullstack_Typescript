import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import patientService from '../services/patients';
import { Gender, Patient } from '../types';
import { Avatar, Typography } from '@mui/material'; // Import Material-UI components
import { Male, Female } from '@mui/icons-material'; // Import Material-UI Icons

const PatientDetails = () => {
  const { id } = useParams();
  const [loadedPatient, setLoadedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const patientData = await patientService.getOne(id ?? '');
        setLoadedPatient(patientData);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatient();
  }, [id]);

  // Define a function to render the appropriate gender icon
  const renderGenderIcon = (gender: Gender | undefined) => {
    switch (gender ?? '') {
    case 'male':
      return <Male />;
    case 'female':
      return <Female />;
    default:
      // Use a generic icon or text representation for 'other'
      return (
        <Avatar>
            Other
        </Avatar>
      );
    }
  };

  return (
    <div>
      <Typography variant="h5">
        {loadedPatient?.name} {renderGenderIcon(loadedPatient?.gender)}
      </Typography>
      <p>SSN: {loadedPatient?.ssn}</p>
      <p>Occupation: {loadedPatient?.occupation}</p>
      <p>Date of Birth: {loadedPatient?.dateOfBirth}</p>
      <Typography variant="h6">
        entries
      </Typography>
      {loadedPatient?.entries.map((entry) => (  
        
        <div key={entry.id}>
          <p>{entry.date} {entry.description}</p>
          <ul>
            {entry.diagnosisCodes?.map((code) => (
              <li key={code}>{code}</li>
            ))}
          </ul>
        </div>  
      ))}
    </div>
  );
};

export default PatientDetails;