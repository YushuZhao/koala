import { useState, useMemo, useEffect } from 'react';

export default (initialValue = {}) => {
  const [data, setData] = useState(initialValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    if (!mounted && Object.values(data).length && !Object.values(data).includes(undefined)) {
      setMounted(true);
      console.log(`useChoose运行了,mounted是 true`)
    } else {
      console.log(`useChoose运行了,mounted是 false`)
    }
  }, [data])

  const choose = useMemo(() => {
    return {
      getConfig: (key) => data[key],

      setConfig: (key, value) => {
        setData({
          ...data,
          [`${key}`]: value,
        });
      },

      getAllConfig: () => {
        if (!Object.values(data).includes(undefined)) {
          return data;
        }
      },

      setAllConfig: (config) => {
        setData({
          ...data,
          ...config,
        });
      },

      resetAllConfig: (config) => {
        setData({ ...config });
      },
      mounted
    };
  }, [data, mounted]);

  return choose;
};
