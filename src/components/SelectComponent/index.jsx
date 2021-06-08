import React, { useState, useEffect, memo } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = (props) => {
  const [value, setValue] = useState(props.data[0].id || '');

  useEffect(() => {
    props.onChange && props.onChange(value)
  }, [value]);

  return (
    <div>
      <Select defaultValue={props.data[0].id || ''} style={{ width: 120 }} onChange={setValue}>
        {
          props.data.map(item => {
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
