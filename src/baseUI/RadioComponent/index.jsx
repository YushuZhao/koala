import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';

const RadioComponent = ({ defaultValue, onChange, data, ...restProps }) => {
  return (
    <div>
      <Radio.Group
        defaultValue={defaultValue}
        onChange={(e) => onChange && onChange(e.target.value)}
        {...restProps}
      >
        {data.map((item) => (
          <Radio.Button key={item.id} value={item.id}>
            {item.name}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

RadioComponent.defaultProps = {
  prefix: 'radio',
};

export default RadioComponent;
