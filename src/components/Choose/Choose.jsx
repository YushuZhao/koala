import React, { memo, useCallback, useMemo } from 'react';
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

    const handleChange = (v) => {
      configs[configKey] = v;
      !isSearch && choose.setConfig(configKey, v);
    };

    switch (prefix) {
      case 'input':
      case 'select':
      case 'radio':
      case 'cascader':
        event.onChange = handleChange;
        break;
      case 'checkbox':
        event.onChange = handleChange;
        event.onAllChange = handleChange;
        break;
      case 'button':
        event.onClick = () => {
          if (htmlType === 'reset') {
            PubSub.publish('RESET', initialConfig);
            choose.resetConfig(initialConfig);
          } else {
            choose.setAllConfig({ ...configs });
            props.onClick && props.onClick();
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
  const { children, layout = 'horizontal', style, choose } = props;

  const isSearch = React.Children.toArray(children).some(
    ({ props }) => props.htmlType && props.htmlType === 'submit'
  );

  const initialConfig = useMemo(() => {
    const configs = choose.getAllConfig();
    return { ...configs };
  }, [choose.mounted]);

  const renderChildren = useCallback(() => {
    return React.Children.map(
      children,
      coverageHandlers(choose, isSearch, initialConfig)
    );
  }, [children, choose, isSearch, initialConfig]);

  return (
    <div className={`choose-container ${layout}`} style={style}>
      {renderChildren()}
    </div>
  );
});

export default Choose;
