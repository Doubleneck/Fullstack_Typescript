import patients_data from '../../data/patients';
import { NonSensitivePatientEntry, PatientEntry ,NewPatientEntry} from '../types';
import { v1 as uuid } from 'uuid';

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


const addPatient = ( entry: NewPatientEntry ): PatientEntry => {

    const newPatientEntry = {
//eslint-disable-next-line @typescript-eslint/no-unsafe-call        
        id: uuid() as string,
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

