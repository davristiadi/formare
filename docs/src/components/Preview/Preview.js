import React, { Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Preview = props => {
    const {
        tag: Tag,
        className,
        children,
        ...attributes
    } = props;

    let childArray = Children.toArray(children);
    childArray.push(<div className="fr-preview__tag">Preview</div>);

    attributes.className = classNames(
        `fr-preview`,
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
}

export default Preview