import React from 'react';
import classNames from 'classnames';
import dedent from 'dedent';
import './Highlight.scss';
import 'highlight.js/styles/dracula.css';
import useHighlight from './useHighlight';

const Highlight = props => {
  // prettier-ignore
  const {
    tag: Tag = 'div',
    className,
    children,
    lang = 'css',
    ...attributes
  } = props;

  useHighlight();

  const classes = {
    Highlight: classNames(`Highlight`, className),
    HighlightCode: classNames(`hljs`, lang),
  };

  const formatted = dedent(children);

  return (
    <Tag {...attributes} className={classes.Highlight}>
      <pre>
        <code className={classes.HighlightCode}>{formatted}</code>
      </pre>
    </Tag>
  );
};

export default Highlight;
