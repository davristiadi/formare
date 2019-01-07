import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PreviewDisplay = props => {
  const {
    tag: Tag,
    className,
    children,
    borderless,
    ...attributes
  } = props;

  attributes.className = classNames(
    `fr-Preview-display`,
    borderless ? `fr-Preview-display--borderless` : null,
    className
  );

  return <Tag {...attributes}>{children}</Tag>
}

PreviewDisplay.defaultProps = {
  tag: 'div'
}

PreviewDisplay.propTypes = {
  tag: PropTypes.oneOfType([
    PropTypes.func, PropTypes.string,
  ]),
  borderless: PropTypes.bool,
}

export default PreviewDisplay