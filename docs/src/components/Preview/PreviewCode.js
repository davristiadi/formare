import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const PreviewCode = props => {
    const {
        tag: Tag,
        children,
        className,
        ...attributes
    } = props

    attributes.className = classNames(
        `fr-preview__code`,
        className
    )
    
    return <Tag {...attributes}>{children}</Tag>
}

PreviewCode.defaultProps = {
    tag: 'div'
}

PreviewCode.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func, PropTypes.string,
    ]),
}

export default PreviewCode