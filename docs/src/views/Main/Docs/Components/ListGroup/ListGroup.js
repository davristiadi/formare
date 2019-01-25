import React from 'react';
import classNames from 'classnames';
import { 
  Preview,
  PreviewDisplay,
  PreviewHighlight
} from 'components/Preview';

const ListGroup = () => {
  return (
    <article id="list-group" className="fr-DocsArticle">
      <div className="fr-DocsArticle-heading">
        <h3 className="fr-DocsArticle-title">List Group</h3>
        <h5 className="fr-DocsArticle-subtitle">Nulla eiusmod veniam excepteur do anim Lorem et dolore incididunt amet consequat cillum.</h5>
      </div>
      <section className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>You can use a list group component to sort out a related content about a subject in a form of a list.</p>
        <Preview>
          <PreviewDisplay>
            <ul className="ListGroup">
              <li className="ListGroup-item">Adipisicing in fugiat amet anim proident.</li>
              <li className="ListGroup-item">Dolor duis aute laborum Lorem qui exercitation esse.</li>
              <li className="ListGroup-item">Eu excepteur do incididunt occaecat consequat mollit reprehenderit.</li>
              <li className="ListGroup-item">Aliquip est nisi non sit nostrud pariatur est.</li>
            </ul>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<ul className="ListGroup">
              <li className="ListGroup-item">Adipisicing in fugiat amet anim proident.</li>
              <li className="ListGroup-item">Dolor duis aute laborum Lorem qui exercitation esse.</li>
              <li className="ListGroup-item">Eu excepteur do incididunt occaecat consequat mollit reprehenderit.</li>
              <li className="ListGroup-item">Aliquip est nisi non sit nostrud pariatur est.</li>
            </ul>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

export default ListGroup;