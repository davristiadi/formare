import React from 'react';

const NotFound = () => {
  return (
    <div className="NotFoundPage">
      <section className="Hero Hero--large Hero--lighter">
        <div className="Hero-body Hero-body--centerized">
          <div className="Container u-Flex-column">
            <div className="u-FontSize-4xlarge u-FontWeight-semibold u-MarginBottom">
              Whoops! :(
            </div>
            <div className="u-FontSize-xlarge u-MarginBottom-xlarge">
              It seems that we cannot find the page you're looking for.
            </div>
            <div className="u-Flex-row u-FontSize-large -AlignItems-center">
              <a href="javascript:history.back()">Go Back</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
