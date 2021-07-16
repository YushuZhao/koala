import React from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const CheckAllBoxComponent = (props) => {
  const {
    data,
    checkedList,
    indeterminate,
    checkAll,
    onChange,
    onCheckAllChange,
  } = props;

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        全部
      </Checkbox>
      <CheckboxGroup options={data} value={checkedList} onChange={onChange} />
    </>
  );
};

export default CheckAllBoxComponent;
