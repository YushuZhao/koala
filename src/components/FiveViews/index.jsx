import React, { useState, useEffect } from 'react';
// import Cascader from '@/baseUI/CascaderComponent';
import { isFunction } from '@/utils';
import { Cascader } from 'antd';

const FiveViews = ({ onChange }) => {
  const [value, setValue] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
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
    setTimeout(() => {
      setData(options);
      setValue([options[0].value]);
    }, 1000);
  }, []);

  useEffect(() => {
    onChange && isFunction(onChange) && onChange(value);
  }, [value]);

  const handleChange = (value, selectedOptions) => {
    setValue(value);
    // console.log(selectedOptions)
  };

  return (
    <div>
      {data.length && value ? (
        // <Cascader
        //   initialValue={[data[0].value]}
        //   data={data}
        //   onChange={setValue}
        // />
        <Cascader
          options={data}
          value={value}
          onChange={handleChange}
          changeOnSelect
          displayRender={(label) => {
            const value = label.pop();
            return value;
          }}
        />
      ) : (
        []
      )}
    </div>
  );
};

FiveViews.defaultProps = {
  prefix: 'cascader',
  key: 'fiveViews',
};

export default FiveViews;
