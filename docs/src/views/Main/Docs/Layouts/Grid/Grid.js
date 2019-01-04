import React from 'react';
import './Grid.scss';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const Grid = props => {
  return (
    <article id="Grids" className="fr-DocsArticle">
      <div className="fr-DocsArticle-heading">
        <h2 className="fr-DocsArticle-title">Grid System</h2>
        <h5 className="fr-DocsArticle-subtitle">
          Build mobile-first, responsive grids that adapt to multiple screen
          resolutions.
        </h5>
      </div>
      <section className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>
          Formare's grid system makes it easier for developers to build
          mobile-first, responsive website design in no time at all.
        </p>
        <p>
          It's easy to implement and only requires you to use at the minimum{' '}
          <strong>two classes</strong> to use respectively:
        </p>
        <ul>
          <li>
            <code>.Grids</code>: Acts as the wrapper class to the grid layout
            that contain <code>.Grid</code> elements (notice the plural
            phrasing).
          </li>
          <li>
            <code>.Grid</code>: Add as many as you'd like inside of the grid
            layout (notice the singular phrasing).
          </li>
        </ul>
        <Preview>
          <PreviewDisplay>
            <div className="fr-GridExample">
              <div className="Grids">
                <div className="Grid">First Grid</div>
                <div className="Grid">Second Grid</div>
                <div className="Grid">Third Grid</div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div class="Grids">
                <div class="Grid">First Grid</div>
                <div class="Grid">Second Grid</div>
                <div class="Grid">Third Grid</div>
              </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

Grid.propTypes = {};

export default Grid;
