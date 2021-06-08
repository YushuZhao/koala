import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

const InputComponent = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    props.onChange && props.onChange(value)
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

InputComponent.defaultProps = { prefix: 'input' };

export default InputComponent;
