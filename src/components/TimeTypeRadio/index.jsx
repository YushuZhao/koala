import React, { useState, useEffect, memo } from 'react';
import Radio from '@/baseUI/RadioComponent';
import { isFunction } from '@/utils';
import PubSub from 'pubsub-js';

const TimeTypeRadio = memo(({ data, onChange, name, ...restProps }) => {
  const [value, setValue] = useState(data[0].id);

  useEffect(() => {
    let handleSubscribe = (_, values) => {
      setValue(values[name]);
    };
    let id = PubSub.subscribe('RESET', handleSubscribe);
    return () => {
      PubSub.unsubscribe(id);
    };
  }, []);

  useEffect(() => {
    value && onChange && isFunction(onChange) && onChange(value);
  }, [value]);

  return (
    <Radio
      value={value}
      defaultValue={data[0].id}
      data={data}
      onChange={setValue}
      {...restProps}
    />
  );
});

TimeTypeRadio.defaultProps = {
  prefix: 'radio',
  key: 'timeType',
};

TimeTypeRadio.displayName = 'RadioComponent';

export default TimeTypeRadio;
