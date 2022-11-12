import React from 'react';
import { PropsWithChildren } from 'react';

export type ReactComponent<Props = {}> = React.FC<PropsWithChildren<Props>>;

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type MedicineType = {
  medicineName: string;
  frequency: string;
  time: string;
  duration: string;
};

export type DischargeRecordData = {
  name?: string;
  age?: string;
  gender?: string;
  mrd?: string;
  ipNumber?: string;
  specialty?: string;
  dateOfAdmission?: string;
  dateOfDischarge?: string;
  primaryDiagnosis?: string[];
  secondaryDiagnosis?: string[];
  historyAndExamination?: string;
  laboratoryReports?: string;
  courseInTheHospital?: string;
  adviceOnDischarge?: MedicineType[];
  generalInstructions?: string;
  reviewOn?: string;
  labTestsToDoOnReview?: string;
};

export type DischargeRecord = {
  id: number;
  created_at: string;
  data: DischargeRecordData;
};

export type RawDischargeRecord = {
  id: number;
  created_at: string;
  data: string;
};
