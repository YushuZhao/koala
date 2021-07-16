import React, { useState, useEffect } from 'react';

import CheckAllBox from '@/components/CheckAllBox';

const SecondPage2 = () => {
  const [data, setData] = useState([]);
  const [defaultCheckedList, setDefaultCheckedList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const list = ['涉气', '涉水', '噪声', '涉VOC', '危废', '固废', '放射'];
      const defaultList = ['涉气', '涉水'];
      setData(list);
      setDefaultCheckedList(defaultList);
    }, 100);
  }, [])

  const handleChange = list => {
    console.log(list)
  }


  return <div>
    {
      (data.length && defaultCheckedList.length) ?
        < CheckAllBox data={data} defaultCheckedList={defaultCheckedList} onChange={handleChange} />
        :
        []
    }
  </div>;
};

export default SecondPage2;
