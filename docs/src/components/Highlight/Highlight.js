import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import dedent from 'dedent';
import Prism from 'prismjs';

const Highlight = props => {
  // prettier-ignore
  const {
    tag: Tag,
    className,
    children,
    lang,
    ...attributes
  } = props;

  const codePreview = dedent(children);
  const classes = {
    Highlight: classNames(`Highlight`),
    HighlightCode: classNames(`language-${lang}`, className),
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Tag {...attributes} className={classes.Highlight}>
      <pre>
        <code className={classes.HighlightCode}>{codePreview}</code>
      </pre>
    </Tag>
  );
};

Highlight.defaultProps = {
  tag: 'div',
  lang: 'html',
};

export default Highlight;
