import React from 'react';
import { Preview, PreviewDisplay, PreviewCode } from 'components/preview';

export const AlignItemsExample = () => {
  return (
    <Preview lang="html">
      <PreviewDisplay>
        <div className="Grids">
          <div className="Grid Grid-12 Grid-lg-6">
            <div
              className="DummyBlock u-Flex u-AlignItems-start"
              style={{ height: '150px' }}
            >
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
          <div className="Grid Grid-12 Grid-lg-6">
            <div
              className="DummyBlock u-Flex u-AlignItems-center"
              style={{ height: '150px' }}
            >
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
          <div className="Grid Grid-12 Grid-lg-6">
            <div
              className="DummyBlock u-Flex u-AlignItems-end"
              style={{ height: '150px' }}
            >
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
          <div className="Grid Grid-12 Grid-lg-6">
            <div
              className="DummyBlock u-Flex u-AlignItems-baseline"
              style={{ height: '150px' }}
            >
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
          <div className="Grid Grid-12 Grid-lg-6">
            <div
              className="DummyBlock u-Flex u-AlignItems-stretch"
              style={{ height: '150px' }}
            >
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
        </div>
      </PreviewDisplay>
      <PreviewCode>
        {`<div className="u-Flex u-AlignItems-start">...</div>
        <div className="u-Flex u-AlignItems-center">...</div>
        <div className="u-Flex u-AlignItems-end">...</div>
        <div className="u-Flex u-AlignItems-baseline">...</div>
        <div className="u-Flex u-AlignItems-stretch">...</div>
        `}
      </PreviewCode>
    </Preview>
  );
};

export const JustifyContentExample = () => {
  return (
    <Preview lang="html">
      <PreviewDisplay>
        <div className="Grids">
          <div className="Grid Grid-12">
            <div className="DummyBlock u-Flex u-JustifyContent-start">
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
          <div className="Grid Grid-12">
            <div className="DummyBlock u-Flex u-JustifyContent-center">
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
          <div className="Grid Grid-12">
            <div className="DummyBlock u-Flex u-JustifyContent-end">
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
          <div className="Grid Grid-12">
            <div className="DummyBlock u-Flex u-JustifyContent-baseline">
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
          <div className="Grid Grid-12">
            <div className="DummyBlock u-Flex u-JustifyContent-stretch">
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock u-MarginRight">Flex Item</div>
              <div className="DummyBlock">Flex Item</div>
            </div>
          </div>
        </div>
      </PreviewDisplay>
      <PreviewCode>
        {`<div className="u-Flex u-JustifyContent-start">...</div>
        <div className="u-Flex u-JustifyContent-center">...</div>
        <div className="u-Flex u-JustifyContent-end">...</div>
        <div className="u-Flex u-JustifyContent-baseline">...</div>
        <div className="u-Flex u-JustifyContent-stretch">...</div>
        `}
      </PreviewCode>
    </Preview>
  );
};
