import React, { useState, useEffect } from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import Button from '@/baseUI/ButtonComponent';
import Select from '@/baseUI/SelectComponent';
import StdSelect from '@/components/StdSelect';
import TerritorySelect from '@/components/TerritorySelect';
import TimeTypeRadio from '@/components/TimeTypeRadio';
import FiveViews from '@/components/FiveViews';
import CheckAllBox from '@/components/CheckAllBox';

const { useChoose } = Choose;

const SecondPage1 = () => {
  const choose = useChoose();
  const { mounted, getAllConfig } = choose;
  const configs = getAllConfig();
  const data = [
    { id: 1, name: '时' },
    { id: 2, name: '日' },
    { id: 3, name: '周' },
  ];

  // const checkBoxData = ['Apple', 'Pear', 'Orange'];
  // const defaultCheckedList = ['Apple', 'Orange'];
  const checkBoxData = [{ value: 1, label: 'Apple' }, { value: 2, label: 'Pear' }, { value: 3, label: 'Orange' }];
  const defaultCheckedList = [{ value: 1, label: 'Apple' }, { value: 3, label: 'Orange' }];

  useEffect(() => {
    if (!mounted) return;
    console.log(configs);
  }, [mounted, configs]);

  return (
    <Choose choose={choose} layout="vertical">
      {/* <Input name="default-input" /> */}
      <TerritorySelect
        name="territory-select"
        label="属地"
        style={{ width: 140 }}
      />
      <CheckAllBox
        label="分类"
        data={checkBoxData}
        defaultCheckedList={defaultCheckedList}
      />
      <TimeTypeRadio data={data} name="timeType-radio" style={{ width: 140 }} />
      <FiveViews name="fiveViews" />
      <Button name="search-button" text="查询" htmlType="submit" onClick={() => console.log('查询按钮其余事件')} />
      <Button name="reset-button" text="重置" htmlType="reset" />
    </Choose>
  );
};

export default SecondPage1;
