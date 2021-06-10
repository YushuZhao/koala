const isType = (type) => {
  return (obj) => {
    const t = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    return type === t;
  };
};

export const isArray = (obj) => isType('array')(obj);

export const isFunction = (obj) => isType('function')(obj);
