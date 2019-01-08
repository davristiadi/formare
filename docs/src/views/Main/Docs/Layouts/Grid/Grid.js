import React, { memo } from 'react';
import './Grid.scss';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const GridSizes = memo(props => {
  return [...Array(12)].map((x, i) => {
    if(i > 0) {
      return (
        <div className="Grids">
          <div className={`Grid Grid-${i}`}>
            <span>{i}</span>
          </div>
          <div className="Grid">
            <span></span>
          </div>
        </div>
      )
    }
  })
});

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
          Grid system makes it possible to build mobile-first, responsive
          website design in no time at all and is built with <strong>flexbox.</strong>
        </p>
        <p>
          Formare's grid system is easy to implement and only requires you to
          use at minimum <strong>two classes</strong> to use respectively:
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
        <p>Here are the basic implementation of our grid layout:</p>
        <Preview>
          <PreviewDisplay>
            <div className="fr-GridExample">
              <div className="Grids">
                <div className="Grid">
                  <span>First Grid</span>
                </div>
                <div className="Grid">
                  <span>Second Grid</span>
                </div>
                <div className="Grid">
                  <span>Third Grid</span>
                </div>
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
        <p>
          As you can see above, if we want to build three grids in a row, we could just put three <code>.Grid</code>
          classes. Each grid's width will automatically be adjusted equally.
        </p>
      </section>
      <section className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Grid Sizes</h4>
        </div>
        <Preview>
          <PreviewDisplay>
            <div id="grid-sizes" className="fr-GridExample">
              <GridSizes {...props} />
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div class="Grids">
                <div class="Grid Grid-2">.Grid-2</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-3">.Grid-3</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-4">.Grid-4</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-5">.Grid-5</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-6">.Grid-6</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-7">.Grid-7</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-8">.Grid-8</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-9">.Grid-9</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-10">.Grid-10</div>
                <div class="Grid">Auto</div>
              </div>
              <div class="Grids">
                <div class="Grid Grid-11">.Grid-11</div>
                <div class="Grid">Auto</div>
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
