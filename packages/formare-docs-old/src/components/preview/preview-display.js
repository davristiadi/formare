import React from 'react';
import classNames from 'classnames';

const PreviewDisplay = props => {
  // prettier-ignore
  const {
		tag: Tag,
		className,
    children,
    theme,
		...attributes
	} = props;

  const classes = {
    PreviewDisplay: classNames(
      `Preview-display`,
      theme ? `Preview-display--${theme}` : null,
      className,
    ),
  };

  return (
    <Tag {...attributes} className={classes.PreviewDisplay}>
      {children}
    </Tag>
  );
};

PreviewDisplay.defaultProps = {
  tag: 'div',
};

export default PreviewDisplay;
