import React, { useState, useEffect } from 'react';
import { Cascader } from 'antd';
import { isFunction } from '@/utils';
import PubSub from 'pubsub-js';

const FiveViews = (props) => {
  const {
    choose,
    isSearch,
    name,
    onChange,
    ...restProps
  } = props;
  const [value, setValue] = useState(undefined);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [data, setData] = useState([]);
  const options = [
    {
      value: 1,
      level: 1,
      label: 'Zhejiang',
      children: [
        {
          value: 2,
          level: 2,
          label: 'Hanzhou',
          children: [
            {
              value: 3,
              level: 3,
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 4,
      level: 1,
      label: 'Jiangsu',
      children: [
        {
          value: 5,
          level: 2,
          label: 'Nanjing',
          children: [
            {
              value: 6,
              level: 3,
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
      setValue([options[0].value]); // 级联选择value为数组
      setSelectedOption(getOption(options[0]));
      choose && isSearch && choose.setConfig(name, getOption(options[0]));
    }, 1000);
  }, []);

  useEffect(() => {
    if (!data.length) return
    let handleSubscribe = (msg, values) => {
      setValue([data[0].value]);
      setSelectedOption(getOption(data[0]));
    };
    let id = PubSub.subscribe('RESET', handleSubscribe);
    return () => {
      PubSub.unsubscribe(id);
    };
  }, [data]);

  useEffect(() => {
    if (!selectedOption || !Object.values(selectedOption).length) return
    onChange && isFunction(onChange) && onChange(selectedOption);
  }, [selectedOption]);

  const getOption = (data) => {
    return {
      'admId': data.value,
      'admLevel': data.level
    }
  }

  const handleChange = (v, selectedOptions) => {
    setValue(v);
    if (selectedOptions && selectedOptions.length > 0) {
      const data = selectedOptions[selectedOptions.length - 1];
      setSelectedOption(getOption(data));
    }
  }

  return (
    <div>
      {data.length && value ?
        <Cascader
          options={data}
          value={value}
          defaultValue={[data[0].value]}
          onChange={handleChange}
          changeOnSelect
          displayRender={(label) => label.pop()}
        />
        :
        []
      }
    </div>
  );
};

FiveViews.defaultProps = {
  prefix: 'cascader',
  property: 'fiveViews',
};

export default FiveViews;

/**
 * // 使用baseUI中封装的 Cascader
 * import Cascader from '@/baseUI/CascaderComponent';
 *
 * <Cascader
    value={value}
    defaultValue={[data[0].value]}
    data={data}
    onChange={v => setValue(v)}
    {...restProps}
  />
 */