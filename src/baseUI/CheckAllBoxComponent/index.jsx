import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const CheckAllBoxComponent = (props) => {
  const { data, defaultCheckedList } = props;
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < data.length);
    setCheckAll(list.length === data.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? data : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    props.onChange && props.onChange(checkedList);
  }, [checkedList])

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        全部
      </Checkbox>
      <CheckboxGroup options={data} value={checkedList} onChange={onChange} />
    </>
  );
};

CheckAllBoxComponent.defaultProps = {
  prefix: 'checkbox',
  key: 'default'
}

export default CheckAllBoxComponent;
