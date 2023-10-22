/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';
const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

patientRouter.post('/', (_req, res) => {
    const { name, dateOfBirth , ssn, gender, occupation } = _req.body;
   
    const addedEntry = patientService.addPatient({
        name ,
        dateOfBirth ,
        ssn , 
        gender ,
        occupation
    });
 
    res.json(addedEntry);
    
});
 
export default patientRouter;