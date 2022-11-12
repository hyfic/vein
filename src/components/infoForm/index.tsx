import React, { useEffect, useState } from 'react';
import { useInfoStore } from '../../store/info.store';
import { ImagePicker } from './imagePicker';
import { Textarea } from '@chakra-ui/react';

export const InfoForm: React.FC = () => {
  const { orgLogo, doctorSign, orgDetails, doctorDetails, setData } =
    useInfoStore();

  const [orgLogoState, setOrgLogoState] = useState(orgLogo);
  const [doctorSignState, setDoctorSignState] = useState(doctorSign);
  const [orgDetailsState, setOrgDetailsState] = useState(orgDetails);
  const [doctorDetailsState, setDoctorDetailsState] = useState(doctorDetails);

  useEffect(() => {
    if (
      orgLogoState === orgLogo &&
      doctorDetailsState == doctorSign &&
      orgDetailsState === orgDetails &&
      doctorDetailsState == doctorDetails
    )
      return;

    setData({
      orgLogo: orgLogoState,
      doctorSign: doctorSignState,
      orgDetails: orgDetailsState,
      doctorDetails: doctorDetailsState,
    });
  }, [orgLogoState, doctorSignState, orgDetailsState, doctorDetailsState]);

  return (
    <div className='p-5'>
      <h2 className='text-xl font-medium underline mb-3'>Organization</h2>
      <ImagePicker
        title='Organization logo'
        state={orgLogoState}
        setState={setOrgLogoState}
      />
      <Textarea
        mt={3}
        variant='filled'
        placeholder='Organization details'
        value={orgDetailsState}
        onChange={(e) => setOrgDetailsState(e.target.value)}
      />
      <h2 className='text-xl font-medium underline my-3'>Doctor</h2>
      <ImagePicker
        title='Digital signature'
        state={doctorSignState}
        setState={setDoctorSignState}
      />
      <Textarea
        mt={3}
        variant='filled'
        placeholder='Doctor details'
        value={doctorDetailsState}
        onChange={(e) => setDoctorDetailsState(e.target.value)}
      />
    </div>
  );
};
