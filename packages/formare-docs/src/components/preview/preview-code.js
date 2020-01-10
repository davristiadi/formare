import React from 'react';
import classNames from 'classnames';
import { Highlight } from 'components/highlight';

const PreviewCode = props => {
  const { tag: Tag, children, className, ...attributes } = props;

  const classes = {
    PreviewCode: classNames(`Preview-code`, className),
  };

  return (
    <Tag {...attributes} className={classes.PreviewCode}>
      <Highlight lang={attributes.lang}>{children}</Highlight>
    </Tag>
  );
};

PreviewCode.defaultProps = {
  tag: 'div',
};

export default PreviewCode;
