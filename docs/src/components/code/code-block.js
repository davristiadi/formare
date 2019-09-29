import React from 'react';
import classNames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './code.scss';

const CodeBlock = props => {
  const { codeString, htmlString, language, className } = props;

  const setCodeString = () => {
    if (language === 'html') {
      return htmlString;
    }

    return codeString;
  };

  console.log(setCodeString());

  return (
    <Highlight {...defaultProps} code={setCodeString()} language={language}>
      {props => {
        // prettier-ignore
        const { 
          className: _className, 
          style,
          tokens, 
          getLineProps,
          getTokenProps 
        } = props;

        const classes = classNames(className, `CodeBlock`, _className);

        return (
          <pre className={classes} data-language={language} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
