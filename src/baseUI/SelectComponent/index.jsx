import React, { useState, useEffect, memo } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = ({ initialValue = '', onChange, data }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange && onChange(value)
  }, [value]);

  return (
    <div>
      <Select defaultValue={initialValue} style={{ width: 120 }} onChange={setValue}>
        {
          data.map(item => {
            const { name, id } = item
            return (
              <Option key={id} value={id}>{name}</Option>
            )
          })
        }
      </Select>
    </div>
  );
}

SelectComponent.defaultProps = {
  prefix: 'select'

};

export default SelectComponent;
