import patients_data from '../../data/patients';
import { NonSensitivePatientEntry, PatientEntry } from '../types';

const getEntries = (): PatientEntry[] => {
    return patients_data;
  };

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients_data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};


export default {
  getEntries,
  getNonSensitiveEntries
};