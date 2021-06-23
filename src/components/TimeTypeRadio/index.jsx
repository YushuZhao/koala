import React, { useState, useEffect, memo } from 'react';
import { Radio } from 'antd';
// import Radio from '@/baseUI/RadioComponent';
import { isFunction } from '@/utils';

const TimeTypeRadio = memo(({ data, onChange, name }) => {
  const [value, setValue] = useState(data[0].id);

  useEffect(() => {
    let handleSubscribe = (msg, values) => {
      console.log(msg, values);
      setValue(values[name]);
    };
    let id = PubSub.subscribe('RESET', handleSubscribe);
    return () => {
      PubSub.unsubscribe(id);
    };
  }, []);

  useEffect(() => {
    onChange && isFunction(onChange) && onChange(value);
  }, [value]);

  return (
    // <Radio initialValue={data[0].id} data={data} onChange={setValue} />
    <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
      {data.map((item) => (
        <Radio.Button key={item.id} value={item.id}>
          {item.name}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
});

TimeTypeRadio.defaultProps = {
  prefix: 'radio',
  key: 'timeType',
};

TimeTypeRadio.displayName = 'RadioComponent';

export default TimeTypeRadio;
