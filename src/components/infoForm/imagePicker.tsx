import React from 'react';
import { Button, Flex, useToast } from '@chakra-ui/react';

interface Props {
  title: string;
  state: string | undefined;
  setState: (state: string | undefined) => void;
}

export const ImagePicker: React.FC<Props> = ({ state, setState, title }) => {
  const toast = useToast();
  const fileInputRef = React.useRef<any>();

  const openPicture = () => fileInputRef.current.click();

  return (
    <div>
      <input
        type='file'
        ref={fileInputRef}
        className='hidden'
        accept='image/*'
        onChange={(e) => {
          if (!e.target.files || e.target.files.length === 0) {
            setState(undefined);
            return;
          }

          if (e.target.files[0].type.includes('image/')) {
            let file = e.target.files[0];
            let reader = new FileReader();

            reader.onloadend = () => {
              setState(URL.createObjectURL(file));
            };

            if (file) reader.readAsDataURL(file);
          } else {
            toast({
              title: 'Unsupported file type',
              description: 'please select an image',
              status: 'error',
              isClosable: true,
              duration: 3000,
              position: 'top-right',
            });
          }
        }}
      />
      {state && <img className='w-32' src={state} alt={title} />}
      {state && (
        <Flex mt={2} alignItems='center'>
          <Button colorScheme='red' onClick={() => setState(undefined)}>
            Remove {title}
          </Button>
          <Button ml={2} colorScheme='blue' onClick={openPicture}>
            Change {title}
          </Button>
        </Flex>
      )}
      {!state && <Button onClick={openPicture}>Pick {title}</Button>}
    </div>
  );
};
