import React, { memo } from 'react';
import { Button } from 'antd';

const ButtonComponent = memo(({ onClick, text, isSearch, ...restProps }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick} {...restProps}>
        {text}
      </Button>
    </div>
  );
});

ButtonComponent.defaultProps = { prefix: 'button', key: 'default' };

export default ButtonComponent;
