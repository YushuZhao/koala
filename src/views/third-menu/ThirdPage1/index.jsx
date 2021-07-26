import React, { useState, useEffect } from 'react';

import Choose from '@/components/Choose';
import Input from '@/baseUI/InputComponent';
import Button from '@/baseUI/ButtonComponent';
import TerritorySelect from '@/components/TerritorySelect';
import FiveViews from '@/components/FiveViews';
import useChoose from '@/hooks/useChoose';

const ThirdPage1 = () => {
  const choose = useChoose();
  const { mounted, getAllConfig } = choose;
  const configs = getAllConfig();

  useEffect(() => {
    if (!mounted) return;
    console.log(configs);
  }, [mounted, configs]);

  return (
    <Choose choose={choose} layout="vertical">
      <Input name="default-input" />
      <TerritorySelect name="territory-select" label="属地" />
      <FiveViews name="fiveViews" />
      <Button name="reset-button" text="重置" htmlType="reset" />
    </Choose>
  );
};

export default ThirdPage1;
