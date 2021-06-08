import React from 'react';

const Choose = ({ children }) => {
  const renderProps = () => {
    return React.Children.map(children, (child) => {
      console.log(child);
      const props = child.props;
      return React.cloneElement(child, props, {
        onChange: (v) => console.log(v),
      });
    });
  };

  return <div>{renderProps()}</div>;
};

export default Choose;
