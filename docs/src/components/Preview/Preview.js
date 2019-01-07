import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PreviewDisplay from './PreviewDisplay';

const Preview = props => {
  const {
    tag: Tag = 'div',
    className,
    children,
    horizontal,
    borderless,
    ...attributes
  } = props;

  let childArray = Children.toArray(children);
  
  if (!borderless) childArray.push(<div className="fr-Preview-tag">Preview</div>);
  else {
    return childArray.map(child => {
      if (child.type === PreviewDisplay) {
        console.log(child);
        return child = cloneElement(child, { borderless });
      }

      return child;
    });
  }

  attributes.className = classNames(
    `fr-Preview`,
    className,
  );

  return <Tag {...attributes}>{childArray}</Tag>;
};

Preview.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  borderless: PropTypes.bool,
};

export default Preview;
