import { NewPatientEntry } from './types';
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};
const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};


const parseGender = (gender: unknown): string => {
  if (!gender || !isString(gender)) {
    throw new Error('Incorrect or missing gender');
  }
  if (!isGender(gender)){
    throw new Error('Gender must be: female, male or other');
  }
  return gender;
};

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}


const toNewPatientEntry = (object: unknown): NewPatientEntry => {

  const typedObject = object as { name: string, dateOfBirth : string, ssn : string, gender :string, occupation : string };
  
  const newEntry: NewPatientEntry = {
    name : typedObject .name,
    dateOfBirth : typedObject.dateOfBirth,
    ssn : typedObject.ssn,
    gender : parseGender(typedObject.gender),
    occupation: typedObject.occupation ,
  };
  return newEntry;
};

export default toNewPatientEntry;