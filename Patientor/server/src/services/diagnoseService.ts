import diagnoses_data from '../../data/diagnoses';
import { DiagnoseEntry } from '../types';

const diagnoses: DiagnoseEntry[] = diagnoses_data ;

const getEntries = (): DiagnoseEntry[] => {
  return diagnoses;
};


export default {
  getEntries,
};