import React, { Children } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import classNames from 'classnames';
import { PreviewCode } from 'components/preview';
import beautify from 'js-beautify';

const Preview = props => {
  const { lang, mirror, className, children, layout } = props;

  const classes = {
    Preview: classNames(
      `Preview`,
      layout ? `Preview--${layout}` : null,
      className,
    ),
  };

  const childArr = Children.toArray(children);
  childArr.map(child => {
    if (mirror) {
      let convertedCode = renderToStaticMarkup(child.props.children);
      convertedCode = beautify.html(convertedCode, { indent_size: 2 });

      childArr.push(<PreviewCode>{convertedCode}</PreviewCode>);
    }

    if (child.props.mdxType === ' PreviewCode') {
      return React.cloneElement(child, { lang });
    }

    return child;
  });

  return <div className={classes.Preview}>{childArr}</div>;
};

export default Preview;
