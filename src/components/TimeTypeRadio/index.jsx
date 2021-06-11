import React, { useState, useEffect, memo } from 'react';
import Radio from '@/baseUI/RadioComponent';
import { isFunction } from '@/utils';

const TimeTypeRadio = memo(({ data, onChange }) => {
  const [value, setValue] = useState(data[0].id);

  useEffect(() => {
    onChange && isFunction(onChange) && onChange(value);
  }, [value]);

  return (
    <Radio initialValue={data[0].id} data={data} onChange={setValue} />
  );
});

TimeTypeRadio.defaultProps = {
  prefix: 'radio',
  key: 'timeType',
};

TimeTypeRadio.displayName = 'RadioComponent';

export default TimeTypeRadio;
