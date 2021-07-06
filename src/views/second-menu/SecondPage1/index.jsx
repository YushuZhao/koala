import React, { useState, useEffect } from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import Button from '@/baseUI/ButtonComponent';
import Select from '@/baseUI/SelectComponent';
import StdSelect from '@/components/StdSelect';
import TerritorySelect from '@/components/TerritorySelect';
import TimeTypeRadio from '@/components/TimeTypeRadio';
import FiveViews from '@/components/FiveViews';
import useChoose from '@/hooks/useChoose';

const SecondPage1 = () => {
  // const initialConfig = {
  //   "default-input": '',
  //   "territory-select": 1,
  //   "timeType-radio": 1,
  // };
  const choose = useChoose({});
  const data = [
    { id: 1, name: '时' },
    { id: 2, name: '日' },
    { id: 3, name: '周' },
  ];

  useEffect(() => {
    const tmpConfig = choose.getAllConfig();
    console.log('page运行了')
    console.log(tmpConfig)
    if (!tmpConfig) return;
  }, [choose.getAllConfig()]);

  return (
    <Choose
      choose={choose}
      layout="horizontal"
    >
      <Input name="default-input" />
      <TerritorySelect name="territory-select" label='属地' style={{ width: 140 }} />
      <TimeTypeRadio data={data} name="timeType-radio" style={{ width: 140 }} />
      <FiveViews name="fiveViews" />
      <Button name="search-button" text="查询" htmlType="submit" />
      <Button name="reset-button" text="重置" htmlType="reset" />
    </Choose>
  );
};

export default SecondPage1;
