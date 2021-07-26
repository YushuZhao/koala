import React, { useState, useEffect } from 'react';
import Cascader from '@/baseUI/CascaderComponent';
import { isFunction } from '@/utils';
import PubSub from 'pubsub-js';

const FiveViews = ({ choose, isSearch, name, onChange, ...restProps }) => {
  const [value, setValue] = useState(undefined);
  const [defaultValue, setDefaultValue] = useState(undefined);
  const [data, setData] = useState([]);
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hanzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {

    setTimeout(() => {
      setData(options);
      setValue([options[0].value]);

      choose && isSearch && choose.setConfig(name, options[0].value);
    }, 1000);
  }, []);

  useEffect(() => {
    let handleSubscribe = (msg, values) => {
      console.log('----------')
      console.log(values)
      setValue([values[name]]);
    };
    let id = PubSub.subscribe('RESET', handleSubscribe);
    return () => {
      PubSub.unsubscribe(id);
    };
  }, []);

  useEffect(() => {
    onChange && isFunction(onChange) && onChange(value);
  }, [value]);

  const handleChange = (value, selectedOptions) => {
    setValue(value);
    console.log(selectedOptions)
  };

  return (
    <div>
      {data.length && value ?
        <Cascader
          value={value}
          defaultValue={[data[0].value]}
          data={data}
          onChange={handleChange}
          {...restProps}
        />
        :
        []
      }
    </div>
  );
};

FiveViews.defaultProps = {
  prefix: 'cascader',
  key: 'fiveViews',
};

export default FiveViews;
