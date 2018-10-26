import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import PreviewDisplay from './PreviewDisplay';

const Preview = props => {
    const {
        tag: Tag = 'div',
        className,
        children,
        horizontal,
        simple,
        ...attributes
    } = props;

    let childArray = Children.toArray(children);

    if(!simple) {
        childArray.push(<div className="fr-preview__tag">Preview</div>);
    } 
    else {
        childArray.map(child => {
            if(child.type === PreviewDisplay) {
                return child = cloneElement(child, { simple });
            }
            
            return child;
        })
    }
    
    attributes.className = classNames(
        `fr-preview`,
        horizontal ? `fr-preview--horizontal` : null,
        className
    );
    
    return <Tag {...attributes}>{childArray}</Tag>
}

Preview.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func, PropTypes.string,
    ]),
    horizontal: PropTypes.bool,
    simple: PropTypes.bool,
}

export default Preview