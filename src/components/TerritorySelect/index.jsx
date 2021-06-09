import React, { useState, useEffect, memo } from 'react';
import Select from '@/baseUI/SelectComponent';
import { isFunction } from '@/utils';

const TerritorySelect = memo(({ onChange }) => {
  const [value, setValue] = useState(null);
  const [data, setData] = useState([
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 }
  ]);

  // 异步请求接口,获取属地数据,渲染下拉列表
  // useEffect(() => {
  //   setTimeout(() => {
  // const list = [
  //   { id: 1, name: 1 },
  //   { id: 2, name: 2 },
  //   { id: 3, name: 3 }
  // ]
  //     setData(list);
  //   })
  // }, [])

  // 约定event,之后由Choose容器统一管理
  useEffect(() => {
    onChange && isFunction(onChange) && onChange(value)
  }, [value]);

  return (
    <div>
      { data.length && <Select initialValue={data[0].id} data={data} onChange={setValue} />}
    </div>
  );
})

TerritorySelect.defaultProps = {
  prefix: 'select',
  key: 'territory'
};

TerritorySelect.displayName = 'SelectComponent';

export default TerritorySelect;
