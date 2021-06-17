import React, { useState, useEffect } from 'react';
import { Cascader } from 'antd';

const CascaderComponent = ({ initialValue = [], data, onChange }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  const handleChange = (value, selectedOptions) => {
    setValue(value);
  }

  return (
    <div>
      <Cascader
        options={data}
        value={value}
        onChange={handleChange}
        changeOnSelect
        displayRender={label => {
          const value = label.pop();
          return value
        }}
      />
    </div>
  );
}

CascaderComponent.defalutProps = {
  prefix: 'cascader',
  key: 'default'
}

export default CascaderComponent;
