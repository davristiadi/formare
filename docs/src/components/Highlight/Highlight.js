import React, { Component } from 'react';
import Prism from 'prismjs';
import dedent from 'dedent';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Highlight.scss';

class Highlight extends Component {
  componentDidMount = () => {
    Prism.highlightAll();
  };

  render() {
    const {
      tag: Tag = 'div',
      children,
      lang,
      className,
      ...attributes
    } = this.props;

    attributes.className = classNames(`Highlight`, className);

    const codeBlock = dedent(children);

    return (
      <Tag {...attributes}>
        <pre>
          <code className={`language-${lang}`}>{codeBlock}</code>
        </pre>
      </Tag>
    );
  }
}

Highlight.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default Highlight;
