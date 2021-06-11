import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';

const RadioComponent = ({ initialValue, onChange, data }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  return (
    <div>
      <Radio.Group defaultValue={initialValue} onChange={e => setValue(e.target.value)}>
        {
          data.map(item => <Radio.Button key={item.id} value={item.id}>{item.name}</Radio.Button>)
        }
      </Radio.Group>
    </div>
  );
}


RadioComponent.defaultProps = {
  prefix: 'radio',
};

export default RadioComponent;
