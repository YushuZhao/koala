import React, { useState, useEffect, memo, useCallback } from 'react';

import './style.css';

// const handlers = {
//   'button': 
// }

/**
 * 覆盖子组件的相应event
 * @param {*} fn 
 * @param {*} config 对象,包含所有查询条件的键值
 * @param {*} isSearch 是否有查询按钮
 * @returns 返回所有子组件
 */
const coverageHandlers = (fn, config, isSearch) => {
  return (child) => {
    // console.log(child);
    const { props } = child;
    const { prefix, key, name } = props;
    const configKey = name || `${key}-${prefix}`;
    let event = {};

    switch (prefix) {
      case 'input':
      case 'select':
      case 'radio':
        event.onChange = (v) => {
          config[configKey] = v;
          !isSearch && fn({ ...config });
        };
        break;
      case 'button':
        event.onClick = () => {
          fn({ ...config });
        };
        break;
    }

    return React.cloneElement(child, {
      ...props,
      ...event,
    });
  };
};

const Choose = memo(({ children, layout = 'horizontal', style, isSearch = false, ...props }) => {
  const [data, setData] = useState({});

  const config = {};

  useEffect(() => {
    console.log(data);
  }, [data]);

  const renderChildren = useCallback(() => {
    return React.Children.map(children, coverageHandlers(setData, config, isSearch, name));
  }, [children]);

  return (
    <div className={`choose-container ${layout}`} style={style}>
      {renderChildren()}
    </div>
  );
});

export default Choose;
