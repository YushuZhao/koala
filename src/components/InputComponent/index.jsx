import React, { useState } from 'react';
import { Input } from 'antd';

const InputComponent = () => {
  const [value, setValue] = useState('');

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
