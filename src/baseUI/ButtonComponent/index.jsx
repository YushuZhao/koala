import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({ onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        查询
      </Button>
    </div>
  );
};

ButtonComponent.defaultProps = { prefix: 'button', key: 'default' };

export default ButtonComponent;
