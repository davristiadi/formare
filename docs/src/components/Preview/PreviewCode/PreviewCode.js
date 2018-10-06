import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import Prism from 'prismjs';
import dedent from 'dedent';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import "./PreviewCode.scss";

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

        const codeBlock = dedent(children);
        
        return (
            <Tag {...attributes}>
                <pre><code className={`language-${lang}`}>{codeBlock}</code></pre>
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