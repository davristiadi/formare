import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PreviewDisplay = props => {
  const {
    tag: Tag,
    className,
    children,
    borderless,
    gapless,
    ...attributes
  } = props;

  attributes.className = classNames(
    `Preview-display`,
    borderless ? `Preview-display--borderless` : null,
    gapless ? `Preview-display--gapless` : null,
    className,
  );

  return <Tag {...attributes}>{children}</Tag>;
};

PreviewDisplay.defaultProps = {
  tag: 'div',
};

PreviewDisplay.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  borderless: PropTypes.bool,
  gapless: PropTypes.bool,
};

export default PreviewDisplay;
