import React, { memo, useCallback } from 'react';

import './style.css';

// const handlers = {
//   'button': 
// }

/**
 * 覆盖子组件的相应event
 * @param {*} choose useChoose中各种方法
 * @param {*} config 对象,包含所有查询条件的键值
 * @param {*} isSearch 是否有查询按钮
 * @returns 返回所有子组件
 */
const coverageHandlers = (choose, config, isSearch) => {
  return (child) => {
    const { props } = child;
    const { prefix, key, name } = props;
    const configKey = name || `${key}-${prefix}`;
    let event = {};
    // let config = choose.getAllConfig();

    switch (prefix) {
      case 'input':
      case 'select':
      case 'radio':
      case 'cascader':
        event.onChange = (v) => {
          config[configKey] = v;
          !isSearch && choose.setConfig(configKey, v);
        };
        break;
      case 'button':
        event.onClick = () => {
          choose.setAllConfig({ ...config });
        };
        break;
    }

    return React.cloneElement(child, {
      ...props,
      ...event,
      isSearch
    });
  };
};

const Choose = memo(props => {
  const { children, layout = 'horizontal', style, isSearch = false, choose } = props;
  let config = {}

  const renderChildren = useCallback(() => {
    return React.Children.map(children, coverageHandlers(choose, config, isSearch));
  }, [children]);

  return (
    <div className={`choose-container ${layout}`} style={style}>
      {renderChildren()}
    </div>
  );
});

export default Choose;
