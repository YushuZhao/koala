import React, { useState, useEffect } from 'react';
import CheckBox from '@/baseUI/CheckAllBoxComponent';

const CheckAllBox = ({
  label = '',
  data,
  style,
  defaultCheckedList,
  onChange,
  onCheckAllChange,
}) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const handleChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < data.length);
    setCheckAll(list.length === data.length);
  };

  const handleCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? data.map(item => item.value) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    let handleSubscribe = (msg, values) => {
      let list = defaultCheckedList;
      setCheckedList(list);
      setIndeterminate(
        !!list.length && list.length < data.length
      );
      setCheckAll(list.length === data.length);
    };
    let id = PubSub.subscribe('RESET', handleSubscribe);
    return () => {
      PubSub.unsubscribe(id);
    };
  }, []);

  useEffect(() => {
    onChange && onChange(checkedList);
    onCheckAllChange && onCheckAllChange(data);
  }, [checkedList]);

  return (
    <div style={style}>
      <div style={{ display: 'inline-block' }}>
        {label && <span>{`${label}: `}</span>}
      </div>
      <div style={{ display: 'inline-block' }}>
        <CheckBox
          data={data}
          checkedList={checkedList}
          indeterminate={indeterminate}
          checkAll={checkAll}
          onChange={handleChange}
          onCheckAllChange={handleCheckAllChange}
        />
      </div>
    </div>
  );
};

CheckAllBox.defaultProps = {
  prefix: 'checkbox',
  key: 'default',
};

export default CheckAllBox;
