import React, { useEffect } from 'react';
import classNames from 'classnames';
import dedent from 'dedent';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash.js';
import replaceAllString from 'utilities/replace-all-string';

const Highlight = props => {
  // prettier-ignore
  const {
    tag: Tag,
    className,
    children,
    lang,
    ...attributes
  } = props;

  const replaceAllConfig = {
    from: 'className',
    to: 'class',
  };

  const codePreview = dedent(
    replaceAllString(children.toString(), replaceAllConfig),
  );

  const classes = {
    Highlight: classNames(`Highlight`),
    HighlightPre: classNames(`gatsby-highlight`, `language-${lang}`, className),
    HighlightCode: classNames(`language-${lang}`),
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Tag className={classes.Highlight}>
      <pre {...attributes} className={classes.HighlightPre}>
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
