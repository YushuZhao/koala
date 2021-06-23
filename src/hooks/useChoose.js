import { useState, useMemo } from 'react';

export default (initialValue = {}) => {
  const [data, setData] = useState(initialValue);

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
    };
  }, [data]);

  return choose;
};
