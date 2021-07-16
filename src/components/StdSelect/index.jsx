import React, { useState, useEffect, memo } from 'react';
import Select from '@/baseUI/SelectComponent';
import { isFunction } from '@/utils';
import PubSub from 'pubsub-js';

const StdSelect = memo(({ choose, isSearch, name, onChange, ...restProps }) => {
  const data = [
    { id: 1, name: '标准站1' },
    { id: 2, name: '标准站2' },
    { id: 3, name: '标准站3' },
  ];
  const [value, setValue] = useState(data[0].id);

  useEffect(() => {
    let handleSubscribe = (msg, values) => {
      setValue(values[name]);
    };
    let id = PubSub.subscribe('RESET', handleSubscribe);
    return () => {
      PubSub.unsubscribe(id);
    };
  }, []);

  // 约定event, 之后由Choose容器统一管理
  useEffect(() => {
    onChange && isFunction(onChange) && onChange(value);
  }, [value]);

  return (
    <Select
      value={value}
      defaultValue={data[0].id}
      data={data}
      onChange={setValue}
      {...restProps}
    />
  );
});

StdSelect.defaultProps = {
  prefix: 'select',
  key: 'std',
};

StdSelect.displayName = 'SelectComponent';

export default StdSelect;
