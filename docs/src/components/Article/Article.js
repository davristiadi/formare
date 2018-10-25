import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Article.scss';

const Article = props => {
  const {
    tag: Tag = 'article',
    size,
    children,
    className,
    ...attributes
  } = props;

  attributes.className = classNames(
    `article`,
    size ? `article--${size}` : null,
    className
  );
  
  return <Tag {...attributes}>{children}</Tag>
};

Article.propTypes = {
  tag: PropTypes.oneOfType([
    PropTypes.func, PropTypes.string,
  ]),
  size: PropTypes.string,
};

export default Article;