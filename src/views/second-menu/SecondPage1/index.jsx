import React, { useState, useEffect } from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import Button from '@/baseUI/ButtonComponent';
import TerritorySelect from '@/components/TerritorySelect';
import TimeTypeRadio from '@/components/TimeTypeRadio';
import FiveViews from '@/components/FiveViews';
import useChoose from '@/hooks/useChoose';

const SecondPage1 = () => {
  const [initialConfig, setInitialConfig] = useState({});
  const [isFirst, setIsFirst] = useState(true);

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
    if (!tmpConfig) return;
    if (isFirst) {
      setInitialConfig({ ...tmpConfig });
      setIsFirst(false);
    }
    console.log(tmpConfig);
  }, [choose.getAllConfig()]);

  return (
    <Choose
      initialConfig={initialConfig}
      choose={choose}
      layout="horizontal"
      isSearch={true}
    >
      <Input name="default-input" />
      <TerritorySelect name="territory-select" />
      <TimeTypeRadio data={data} name="timeType-radio" />
      <FiveViews name="fiveViews" />
      <Button name="search-button" text="查询" htmlType="submit" />
      <Button name="reset-button" text="重置" htmlType="reset" />
    </Choose>
  );
};

export default SecondPage1;
