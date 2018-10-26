import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PreviewDisplay = props => {
    const {
        tag: Tag,
        className,
        children,
        simple,
        ...attributes
    } = props;

    attributes.className = classNames(
        `fr-preview__display`,
        simple ? `fr-preview__display--borderless` : null,
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
    simple: PropTypes.bool,
}

export default PreviewDisplay