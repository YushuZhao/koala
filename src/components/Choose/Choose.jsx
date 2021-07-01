import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import PubSub from 'pubsub-js';

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
const coverageHandlers = (choose, isSearch, memoriedInitialConfig, initialConfig) => {
  return (child) => {
    const { props } = child;
    const { prefix, key, name, htmlType } = props;
    const configKey = name || `${key}-${prefix}`;
    let event = {};
    let config = choose.getAllConfig();
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
          if (htmlType === 'reset') {
            PubSub.publish('RESET', { ...memoriedInitialConfig });
            choose.resetAllConfig({ ...memoriedInitialConfig });
          } else {
            choose.setAllConfig({ ...config });
          }
        };
        break;
    }

    return React.cloneElement(child, {
      ...props,
      ...event,
      isSearch,
      choose,
    });
  };
};

const Choose = memo((props) => {
  const {
    children,
    layout = 'horizontal',
    style,
    choose,
    initialConfig,
  } = props;

  // let initialConfig = {};
  let isSearch = false;
  children.map(item => {
    const { prefix, key, name, htmlType } = item.props;
    const configKey = name || `${key}-${prefix}`;
    if (htmlType && htmlType === 'submit') {
      isSearch = true;
    }

    // if (prefix !== 'button') {
    //   initialConfig[configKey] = undefined;
    // }
  });
  // console.log(initialConfig)

  // const memoriedInitialConfig = useMemo(() => {
  //   console.log(choose.getAllConfig())
  //   return choose.getAllConfig()
  // }, [choose.mounted])

  const renderChildren = useCallback(() => {

    return React.Children.map(
      children,
      coverageHandlers(choose, isSearch, initialConfig)
    );
  }, [children]);

  return (
    <div className={`choose-container ${layout}`} style={style}>
      {renderChildren()}
    </div>
  );
});

export default Choose;
