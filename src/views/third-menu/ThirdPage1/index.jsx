import React from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import TerritorySelect from '@/components/TerritorySelect';

const ThirdPage1 = () => {
  return (
    <Choose>
      <Input />
      <TerritorySelect />
    </Choose>
  );
};

export default ThirdPage1;
