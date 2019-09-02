import React from 'react';
import classNames from 'classnames';

const DummyBlock = props => {
  const { className, children, ...attributes } = props;

  const classes = {
    DummyBlock: classNames(`DummyBlock`, className),
  };

  return (
    <Tag {...attributes} className={classes.DummyBlock}>
      {children}
    </Tag>
  );
};

export default DummyBlock;
