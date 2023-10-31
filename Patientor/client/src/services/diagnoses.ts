import axios from 'axios';
import { DiagnoseEntry } from '../types';

import { apiBaseUrl } from '../constants';

const getAll = async () => {
  const { data } = await axios.get<DiagnoseEntry[]>(
    `${apiBaseUrl}/diagnoses`
  );

  return data;
};

// const getOne = async (id: string) => {
//   const { data } = await axios.get<DiagnoseEntry>(`${apiBaseUrl}/diagnoses/${id}`);
//   return data;
// };

// const create = async (object: PatientFormValues) => {
//   const { data } = await axios.post<Patient>(
//     `${apiBaseUrl}/patients`,
//     object
//   );

//   return data;
// };

export default {
  getAll
//   getAll, getOne, create
};