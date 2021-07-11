import React, { useState, useEffect } from 'react';
import CheckBox from '@/baseUI/CheckAllBoxComponent';

const CheckAllBox = ({ onChange, ...restProps }) => {

  const data = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];

  const [checkList, setCheckList] = useState(defaultCheckedList);

  useEffect(() => {
    let handleSubscribe = (msg, values) => {
      setCheckList(defaultCheckedList);
    };
    let id = PubSub.subscribe('RESET', handleSubscribe);
    return () => {
      PubSub.unsubscribe(id);
    };
  }, []);

  useEffect(() => {
    onChange && onChange(checkList);
  }, [checkList]);


  return (
    <div>
      <CheckBox data={data} defaultCheckedList={defaultCheckedList} onChange={setCheckList} />
    </div>
  );
}

CheckAllBox.defaultProps = {
  prefix: 'checkbox',
  key: 'pollutionSource',
}

export default CheckAllBox;
