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
    <article id="grid-docs" className="fr-DocsArticle">
      <div className="fr-DocsArticle-heading">
        <h2 className="fr-DocsArticle-title">Grid System</h2>
        <h5 className="fr-DocsArticle-subtitle">Build mobile-first, responsive grids that adapt to multiple screen resolutions.</h5>
      </div>
      <section className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>Grid system makes it possible to build mobile-first, responsive website design in no time at all and is built with <strong>flexbox.</strong></p>
        <p>Formare's grid system is easy to implement and only requires you to use at minimum <strong>two classes</strong> to use respectively:</p>
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
        <p>Here is the most basic implementation of Formare's grid system:</p>
        <Preview borderless>
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
          As you can see from above, to build three grids in one row, add three <code>.Grid</code> classes inside of <code>.Grids</code> container class. 
          Each grid's width will be adjusted equally.
        </p>
      </section>
      <section className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Grid Sizes</h4>
        </div>
        <p>The grid system is composed of 12 columns, but this can be changed by altering the <code>$grid-columns</code> variable.</p>
        <Preview borderless>
          <PreviewDisplay>
            <div id="grid-sizes" className="fr-GridExample">
              <GridSizes {...props} />
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div class="Grids">
              <div class="Grid Grid-1">.Grid-1</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-2">.Grid-2</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-3">.Grid-3</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-4">.Grid-4</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-5">.Grid-5</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-6">.Grid-6</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-7">.Grid-7</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-8">.Grid-8</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-9">.Grid-9</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-10">.Grid-10</div>
              <div class="Grid"></div>
            </div>
            <div class="Grids">
              <div class="Grid Grid-11">.Grid-11</div>
              <div class="Grid"></div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
        <div className="Heading">
          <h5 className="Title">Resizing a Grid</h5>
        </div>
        <p>One of the main traits of the grid layout is that you can make one or more grids larger or smaller and its 
          sibling grids will have their width adjusted automatically. Optionally, you can set some grids with fixed width according
          to your needs.</p>
        <Preview>
          <PreviewDisplay>
            <div className="fr-GridExample">
              <div className="Grids">
                <div className="Grid">
                  <span><code>.Grid</code></span>
                </div>
                <div className="Grid Grid-8">
                  <span><code>.Grid .Grid-8</code></span>
                </div>
                <div className="Grid">
                  <span><code>.Grid</code></span>
                </div>
              </div>
              <div className="Grids">
                <div className="Grid">
                  <span><code>.Grid</code></span>
                </div>
                <div className="Grid Grid-3">
                  <span><code>.Grid Grid-3</code></span>
                </div>
                <div className="Grid">
                  <span><code>.Grid</code></span>
                </div>
              </div>
              <div className="Grids">
                <div className="Grid Grid-2">
                  <span><code>.Grid .Grid-2</code></span>
                </div>
                <div className="Grid Grid-4">
                  <span><code>.Grid .Grid-4</code></span>
                </div>
                <div className="Grid Grid-6">
                  <span><code>.Grid .Grid-6</code></span>
                </div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div class="Grids">
                <div class="Grid">.Grid</div>
                <div class="Grid Grid-8">.Grid .Grid-8</div>
                <div class="Grid">.Grid</div>
              </div>

              <div class="Grids">
                <div class="Grid">.Grid</div>
                <div class="Grid Grid-3">.Grid .Grid-3</div>
                <div class="Grid">.Grid</div>
              </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Responsive Grids</h4>
        </div>
        <p>Mollit labore sint eu quis quis elit occaecat est eiusmod cupidatat ut qui cillum labore.</p>
        <p>Dolor nostrud sint proident proident esse laboris aliqua laboris amet nostrud ad eu non. Sit amet non eiusmod magna laborum incididunt aute ea id voluptate ad non non fugiat.</p>
        <Preview>
          <PreviewDisplay>
            <div className="fr-GridExample">
              <div className="Grids">
                <div className="Grid Grid-xs-12 Grid-md-6">
                  <span>.xs-12 .md-6</span>
                </div>
                <div className="Grid Grid-xs-12 Grid-md-6">
                  <span>.xs-12 .md-6</span>
                </div>
              </div>
              <div className="Grids">
                <div className="Grid Grid-xs-12 Grid-md-4">
                  <span>.xs-12 .md-4</span>
                </div>
                <div className="Grid Grid-xs-12 Grid-md-8">
                  <span>.xs-12 .md-8</span>
                </div>
              </div>
            </div>
          </PreviewDisplay>
        </Preview>
      </section>
    </article>
  );
};

Grid.propTypes = {};

export default Grid;
