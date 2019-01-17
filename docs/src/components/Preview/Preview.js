import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PreviewDisplay from './PreviewDisplay';

const Preview = props => {
  const {
    tag: Tag = 'div',
    className,
    children,
    layout,
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
    layout ? `fr-Preview--${layout}` : '',
    className,
  );

  return <Tag {...attributes}>{childArray}</Tag>;
};

Preview.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  borderless: PropTypes.bool,
  layout: PropTypes.string,
};

export default Preview;
