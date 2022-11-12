import React, { createContext, useState } from 'react';
import { DischargeRecordData, SetState } from '../../utils/types';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

export interface DischargeFromContextType {
  dischargeRecordData: DischargeRecordData;
  setDischargeRecordData: SetState<DischargeRecordData>;
}

export const DischargeFormContext =
  createContext<DischargeFromContextType | null>(null);

export const DischargeForm: React.FC = () => {
  const [dischargeRecordData, setDischargeRecordData] =
    useState<DischargeRecordData>({});

  return (
    <div>
      <Tabs size='lg'>
        <TabList>
          <Tab fontSize='xl'>Discharge form</Tab>
          <Tab fontSize='xl'>Preview</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}></TabPanel>
          <TabPanel my={3}></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
