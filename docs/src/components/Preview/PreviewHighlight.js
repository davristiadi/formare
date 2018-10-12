import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Highlight } from '../Highlight';

const PreviewHighlight = props => {
    const {
        tag: Tag = Highlight,
        children,
        className,
        ...attributes
    } = props;
    
    attributes.className = classNames(
        `fr-preview__highlight`,
        className
    );
    
    return <Tag {...attributes}>{children}</Tag>
}

PreviewHighlight.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func, PropTypes.string,
    ]),
}

export default PreviewHighlight