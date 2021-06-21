import { useState, useMemo } from 'react';

export default (initialValue = {}) => {
  const [data, setData] = useState(initialValue);

  const choose = useMemo(() => {
    return {
      getConfig: key => data[key],

      setConfig: (key, value) => {
        setData({
          ...data,
          [`${key}`]: value
        })
      },

      getAllConfig: () => data,

      setAllConfig: (config) => {
        setData({
          ...data,
          ...config
        })
      },

      resetAllConfig: (config) => {
        setData({ ...config })
      }
    }
  }, [data]);

  return choose
}