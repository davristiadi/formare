import React, { Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Preview = props => {
    const {
        tag: Tag,
        className,
        children,
        ...attributes,
    } = props;  w

    attributes.className = classNames(
        `fr-preview`,
        className
    );
    
    return <Tag {...attributes}>{children}</Tag>
}

Preview.defaultProps = {
    tag: 'div'
}

Preview.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func, PropTypes.string,
    ]),
}

export default Preview