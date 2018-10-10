import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PreviewDisplay = props => {
    const {
        tag: Tag,
        className,
        children,
        ...attributes
    } = props;

    attributes.className = classNames(
        `fr-preview__display`,
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
    ])
}

export default PreviewDisplay