import React, { memo, useEffect } from 'react';
import { Button } from 'antd';

const ButtonComponent = memo(({ onClick, isSearch }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  // useEffect(() => {
  //   isSearch && handleClick();
  // }, [isSearch]);

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        查询
      </Button>
    </div>
  );
});

ButtonComponent.defaultProps = { prefix: 'button', key: 'default' };

export default ButtonComponent;
