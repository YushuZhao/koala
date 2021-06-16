import { useState, useCallback } from 'react';

export default (initialValue = {}) => {
  const [data, setData] = useState(initialValue);

  const getConfig = useCallback((key) => {
    return data[key]
  }, [data]);

  const setConfig = useCallback((key, value) => {
    setData({
      ...data,
      [`${key}`]: value
    })
  }, [data]);

  const getAllConfig = useCallback(() => {
    return data
  }, [data]);

  const setAllConfig = useCallback((config) => {
    setData({
      ...data,
      ...config
    })
  }, [data]);


  return {
    getConfig,
    setConfig,
    getAllConfig,
    setAllConfig,
  }
}