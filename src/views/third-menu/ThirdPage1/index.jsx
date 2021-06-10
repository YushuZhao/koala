import React from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import TerritorySelect from '@/components/TerritorySelect';

const ThirdPage1 = () => {
  return (
    <Choose layout="vertical">
      <Input />
      <TerritorySelect label="属地" />
    </Choose>
  );
};

export default ThirdPage1;
