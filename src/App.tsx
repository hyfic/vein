import React from 'react';
import { DischargeForm } from './components/dischargeForm';
import { InfoForm } from './components/infoForm';

export const App: React.FC = () => {
  return (
    <div>
      <InfoForm />
      <DischargeForm />
    </div>
  );
};
