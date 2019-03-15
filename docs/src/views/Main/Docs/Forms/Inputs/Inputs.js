import React from 'react';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const Inputs = () => {
  return (
    <article id="docs-inputs" className="fr-DocsArticle">
      <div className="fr-DocsArticle-heading">
        <h2 className="fr-DocsArticle-title">Inputs</h2>
        <h5 className="fr-DocsArticle-subtitle">Culpa magna cupidatat in tempor reprehenderit mollit.</h5>
      </div>
      <section className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>Ad elit aliquip aliquip amet duis esse minim irure aliqua Lorem cupidatat sit irure fugiat.</p>
        <Preview layout="horizontal">
          <PreviewDisplay>
            <input className="Input u-mg-bottom" type="text" placeholder="This is an input" />
            <div className="Select Select--loading">
              <select>
                <option>This is a select input</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`
            <input class="Input" type="text" placeholder="This is an input" />
            <div className="Select">
              <select>
                <option>This is a select input</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>`}
          </PreviewHighlight>
        </Preview>
      </section>
      <section className="fr-DocsArticle-section">
      
      </section>
    </article>
  );
};

export default Inputs;