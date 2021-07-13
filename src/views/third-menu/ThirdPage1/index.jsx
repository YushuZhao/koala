import React, { useState, useEffect } from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import Button from '@/baseUI/ButtonComponent';
import TerritorySelect from '@/components/TerritorySelect';
import FiveViews from '@/components/FiveViews';
import useChoose from '@/hooks/useChoose';

const ThirdPage1 = () => {
  const initialConfig = {
    // "default-input": '',
    // "territory-select": 1,
  };
  const choose = useChoose(initialConfig);

  useEffect(() => {
    const tmpConfig = choose.getAllConfig();
    if (!tmpConfig) return;
  }, [choose.getAllConfig()]);

  return (
    <Choose choose={choose} layout="vertical">
      <Input name="default-input" />
      <TerritorySelect name="territory-select" label="属地" />
      <FiveViews />
      <Button name="reset-button" text="重置" htmlType="reset" />
    </Choose>
  );
};

export default ThirdPage1;
