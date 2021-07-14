import { useState, useMemo, useEffect } from 'react';

export default (initialValue = {}) => {
  const [data, setData] = useState(initialValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted && Object.values(data).length && !Object.values(data).includes(undefined)) {
      setMounted(true);
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

      getAllConfig: () => data,

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
