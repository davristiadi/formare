import React from 'react'
import PropTypes from 'prop-types'

const Code = props => {
    const {
        tag, Tag = 'code',
        children,
        className,
        ...attributes
    } = props;

    return <Tag {...attributes}>{children}</Tag>
}

Code.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func, PropTypes.string,
    ]),
}

export default Code