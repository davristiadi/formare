import React, { Component } from 'react'
import Prism from 'prismjs';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import "./styles.scss";

class PreviewCode extends Component {
    componentDidMount = () => {
        Prism.highlightAll();
    }
    
    render () {
        const {
            tag: Tag,
            children,
            lang,
            className,
            ...attributes
        } = this.props;
    
        attributes.className = classNames(
            `fr-preview__code`,
            className
        )
        
        return (
            <Tag {...attributes}>
                <pre>
                    <code className="language-html">
                        {children}
                    </code>
                </pre>
            </Tag>
        )
    }
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