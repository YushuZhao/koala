import React from 'react';

import Choose from '@/components/Choose';
import Input from '@/components/InputComponent';
import TerritorySelect from '@/components/TerritorySelect';

const SecondPage1 = () => {
  return (
    <Choose>
      <Input />
      <TerritorySelect />
    </Choose>
  );
};

export default SecondPage1;
