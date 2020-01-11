import React from 'react';
import CodeBlock from './code-block';
import './code.scss';
import JsxParser from 'react-jsx-parser';

const CodePreview = props => {
  const { codeString, language: lang } = props;

  // const opts = {
  //   objectAssign: '_poly.assign',
  //   transforms: {
  //     dangerousForOf: true,
  //     dangerousTaggedTemplateString: true,
  //   },
  // };

  // const transform = code => _transform(code, opts).code;
  // let transformedCode = transform(props.codeString);

  const parsedCode = () => {
    return <JsxParser jsx={codeString} />;
  };

  return (
    <div className="CodePreview">
      <div className="CodePreview-display">{parsedCode()}</div>
      <CodeBlock {...props} className="CodePreview-codeBlock" />
    </div>
  );
};

export default CodePreview;
