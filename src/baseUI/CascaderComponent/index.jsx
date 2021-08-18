import React from 'react';
import { Cascader } from 'antd';

const CascaderComponent = ({ data, value, defaultValue, onChange }) => {

  return (
    <div>
      <Cascader
        options={data}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        changeOnSelect
        displayRender={(label) => label.pop()}
      />
    </div>
  );
};

CascaderComponent.defalutProps = {
  prefix: 'cascader',
  property: 'default',
};

export default CascaderComponent;
