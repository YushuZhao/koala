import React, { useState, useEffect, memo } from 'react';
import Select from '@/components/SelectComponent';

const TerritorySelect = (props) => {
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
    props.onChange && props.onChange(value)
  }, [value]);

  return (
    <div>
      { data.length && <Select data={data} onChange={setValue} />}
    </div>
  );
}

TerritorySelect.defaultProps = {
  prefix: 'select-territory'
};

TerritorySelect.displayName = 'SelectComponent';

export default TerritorySelect;
