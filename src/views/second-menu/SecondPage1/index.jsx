import React from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import Button from '@/baseUI/ButtonComponent';
import TerritorySelect from '@/components/TerritorySelect';

const SecondPage1 = () => {
  return (
    <Choose layout="horizontal" isSearch={true} >
      <Input />
      <TerritorySelect />
      <Button />
    </Choose>
  );
};

export default SecondPage1;
