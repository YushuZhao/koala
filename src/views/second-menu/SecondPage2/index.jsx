import React, { useState, useEffect } from 'react';

import CheckAllBox from '@/components/CheckAllBox';

const SecondPage2 = () => {
  const [data, setData] = useState([]);
  const [defaultCheckedList, setDefaultCheckedList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const list = [
        { value: 1, label: '涉气' },
        { value: 2, label: '涉水' },
        { value: 3, label: '噪声' },
        { value: 4, label: '涉VOC' },
        { value: 5, label: '危废' },
        { value: 6, label: '固废' },
        { value: 7, label: '放射' },
      ];
      const defaultList = [1, 2];
      setData(list);
      setDefaultCheckedList(defaultList);
    }, 100);
  }, []);

  const handleChange = (list) => {
    console.log(list);
  };

  return (
    <div>
      {data.length && defaultCheckedList.length ? (
        <CheckAllBox
          data={data}
          defaultCheckedList={defaultCheckedList}
          onChange={handleChange}
        />
      ) : (
        []
      )}
    </div>
  );
};

export default SecondPage2;
