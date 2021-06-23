import React, { useState, useEffect, memo } from 'react';
import { Select } from 'antd';
// import Select from '@/baseUI/SelectComponent';
import { isFunction } from '@/utils';
import PubSub from 'pubsub-js';

const { Option } = Select;

const TerritorySelect = memo(
  ({ onChange, label = '', style, name, choose, isSearch }) => {
    const [value, setValue] = useState(undefined);
    const [data, setData] = useState([]);

    // 异步请求接口,获取属地数据,渲染下拉列表
    useEffect(() => {
      setTimeout(() => {
        const list = [
          { id: 1, name: '海淀区' },
          { id: 2, name: '丰台区' },
          { id: 3, name: '朝阳区' },
        ];
        setValue(list[0].id);
        setData(list);
        // 回调choose方法, 初始化config
        choose && isSearch && choose.setConfig(name, list[0].id);
      }, 100);
    }, []);

    useEffect(() => {
      let handleSubscribe = (msg, values) => {
        console.log(msg, values);
        setValue(values[name]);
      };
      let id = PubSub.subscribe('RESET', handleSubscribe);
      return () => {
        PubSub.unsubscribe(id);
      };
    }, [data]);

    // 约定event,之后由Choose容器统一管理
    useEffect(() => {
      onChange && isFunction(onChange) && onChange(value);
    }, [value]);

    return (
      // <div style={style}>
      //   <div style={{ display: 'inline-block' }}>
      //     {label && <span>{`${label}: `}</span>}
      //   </div>
      //   <div style={{ display: 'inline-block', minWidth: 85 }} >
      //     {data.length ?
      //       <Select initialValue={data[0].id} data={data} onChange={setValue} />
      //       :
      //       []
      //     }
      //   </div>
      // </div>
      <div style={style}>
        <div style={{ display: 'inline-block' }}>
          {label && <span>{`${label}: `}</span>}
        </div>
        <div style={{ display: 'inline-block', minWidth: 85 }}>
          {data.length && value ? (
            <Select value={value} onChange={setValue}>
              {data.map((item) => {
                const { name, id } = item;
                return (
                  <Option key={id} value={id}>
                    {name}
                  </Option>
                );
              })}
            </Select>
          ) : (
            []
          )}
        </div>
      </div>
    );
  }
);

TerritorySelect.defaultProps = {
  prefix: 'select',
  key: 'territory',
};

TerritorySelect.displayName = 'SelectComponent';

export default TerritorySelect;
