import patients_data from '../../data/patients';
import { NonSensitivePatientEntry, PatientEntry ,NewPatientEntry} from '../types';
import { v1 as uuid } from 'uuid';

const getEntries = (): PatientEntry[] => {
  return patients_data;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients_data.map(({ id, name, dateOfBirth, gender, occupation, entries}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};


const addPatient = ( entry: NewPatientEntry ): PatientEntry => {

  const newPatientEntry = {
    id: uuid() ,
    ...entry
  };

  patients_data.push(newPatientEntry);
  return newPatientEntry;
};
export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient
};

