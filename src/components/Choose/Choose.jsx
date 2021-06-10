import React, { useState, useEffect, memo, useCallback } from 'react';

import './style.css';

const coverageHandlers = (fn, config) => {
  return child => {
    console.log(child);
    const { props } = child;
    const { prefix, key } = props;
    let event = {};

    switch (prefix) {
      case 'input': case 'select':
        event.onChange = v => {
          config[`${key}-${prefix}`] = v;
          fn({ ...config });

        };
        break;
      case 'button':
        event.onClick = v => console.log(v)
        break;
    }

    return React.cloneElement(child, {
      ...props,
      ...event
    });
  }
}

const Choose = memo(({ children, props }) => {
  const [data, setData] = useState({});

  const config = {};

  useEffect(() => {
    console.log(data)
  }, [data]);

  const renderChildren = useCallback(() => {
    return React.Children.map(children, coverageHandlers(setData, config));
  }, [children]);

  return (
    <div className='choose-container horizontal' > {renderChildren()}</div>
  );
});

export default Choose;
