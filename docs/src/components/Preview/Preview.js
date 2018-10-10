import React, { Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Preview = props => {
    const {
        tag: Tag,
        className,
        children,
        horizontal,
        ...attributes
    } = props;

    let childArray = Children.toArray(children);
    childArray.push(<div className="fr-preview__tag">Preview</div>);

    attributes.className = classNames(
        `fr-preview`,
        horizontal ? `fr-preview--horizontal` : null,
        className
    );
    
    return <Tag {...attributes}>{childArray}</Tag>
}

Preview.defaultProps = {
    tag: 'div'
}

Preview.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func, PropTypes.string,
    ]),
    horizontal: PropTypes.bool,
}

export default Preview