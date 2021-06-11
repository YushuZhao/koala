import React from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import Button from '@/baseUI/ButtonComponent';
import TerritorySelect from '@/components/TerritorySelect';
import TimeTypeRadio from '@/components/TimeTypeRadio';

const SecondPage1 = () => {
  const data = [
    { id: 1, name: '时' },
    { id: 2, name: '日' },
    { id: 3, name: '周' }
  ]

  return (
    <Choose layout="horizontal" isSearch={true} >
      <Input name="default-input" />
      <TerritorySelect name="territory-select" />
      <TimeTypeRadio data={data} name="timeType-radio" />
      <Button name="default-button" />
    </Choose>
  );
};

export default SecondPage1;
