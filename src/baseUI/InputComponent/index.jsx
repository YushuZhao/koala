import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

const InputComponent = ({ initialValue = '', onChange }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

InputComponent.defaultProps = { prefix: 'input', property: 'default' };

export default InputComponent;
