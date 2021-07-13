import React, { memo, useState, useEffect, useLayoutEffect, useCallback, useMemo } from 'react';
import PubSub from 'pubsub-js';

import './style.css';

/**
 * 覆盖子组件的相应event
 * @param {*} choose useChoose中各种方法
 * @param {*} isSearch 是否有查询按钮
 * @param {*} initialConfig allconfig初始值
 * @returns 返回所有子组件
 */
const coverageHandlers = (choose, isSearch, initialConfig) => {
  return (child) => {
    const { props } = child;
    const { prefix, key, name, htmlType } = props;
    const configKey = name || `${key}-${prefix}`;
    let event = {};
    let configs = choose.getAllConfig();

    switch (prefix) {
      case 'input':
      case 'select':
      case 'radio':
      case 'cascader':
      case 'checkbox':
        event.onChange = (v) => {
          configs[configKey] = v;
          !isSearch && choose.setConfig(configKey, v);
        };
        break;
      case 'button':
        event.onClick = () => {
          if (htmlType === 'reset') {
            PubSub.publish('RESET', initialConfig);
            choose.resetAllConfig(initialConfig);
          } else {
            choose.setAllConfig({ ...configs });
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
  } = props;

  let isSearch = false;

  children.map(item => {
    const { htmlType } = item.props;
    if (htmlType && htmlType === 'submit') {
      isSearch = true;
    }
  });

  useLayoutEffect(() => {
    if (!choose.mounted) {
      children.map(child => {
        const { props } = child;
        const { prefix, key, name } = props;
        const configKey = name || `${key}-${prefix}`;
        if (prefix !== "button") {
          choose.setConfig(configKey, undefined);
        }
      });
    }
  }, [choose.mounted]);

  const initialConfig = useMemo(() => {
    const configs = choose.getAllConfig();
    return { ...configs }
  }, [choose.mounted])

  const renderChildren = useCallback(() => {
    return React.Children.map(
      children,
      coverageHandlers(choose, isSearch, initialConfig)
    );
  }, [children, isSearch]);

  return (
    <div className={`choose-container ${layout}`} style={style}>
      {renderChildren()}
    </div>
  );
});

export default Choose;
