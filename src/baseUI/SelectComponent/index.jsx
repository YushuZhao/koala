import React, { useState, useEffect, memo } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = ({ defaultValue = '', data, value, style, label = '', ...restProps }) => {

  return (
    <div style={style}>
      <div className="base-select-label" style={{ display: 'inline-block' }}>
        {label && <span>{`${label}: `}</span>}
      </div>
      <div className="base-select-content" style={{ display: 'inline-block' }}>
        {data.length && value ? (
          <Select defaultValue={defaultValue} value={value} {...restProps}>
            {data.map((item) => {
              const { name, id } = item;
              return (
                <Option key={id} value={id}>
                  {name}
                </Option>
              );
            })}
          </Select>
        ) : (
          []
        )}
      </div>
    </div>

  );
};

SelectComponent.defaultProps = {
  prefix: 'select',
};

export default SelectComponent;
