import React from "react";
import './Card.scss';
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";
import { Highlight } from "components/Highlight";
import { default as PhotoDummy } from "../../../../../assets/images/dummy-photo.jpeg";

const Card = props => {
  return (
    <article className="fr-DocsArticle">
      <div className="fr-DocsArticle-heading">
        <h2 className="fr-DocsArticle-title">Card</h2>
        <h5 className="fr-DocsArticle-subtitle">
          Duis irure ullamco ullamco anim aute labore mollit.
        </h5>
      </div>
      <section id="overview" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>Pariatur pariatur consectetur qui ullamco Lorem amet ut officia culpa.</p>
        <Preview>
          <PreviewDisplay>
            <div className="Grids">
              <div className="Grid Grid-6">
                <div className="Card">
                  <div className="Card-header">
                    <h5 className="Title">Card Title</h5>
                    <h6 className="subtitle color-gray">This is a subtitle</h6>
                  </div>
                  <div className="Card-body">
                    <p>
                      Elit non consectetur eu dolor deserunt eiusmod deserunt. 
                      Eu fugiat esse aliqua magna excepteur irure minim. Id tempor esse cillum aliquip enim.
                    </p>
                  </div>
                  <div className="Card-footer">
                    <button className="Button Button--primary">Submit</button>
                  </div>
                </div>
              </div>
              <div className="Grid Grid-6">
                <div className="Card">
                  <div className="Card-header">
                    <h5 className="Title">Card Title</h5>
                    <h6 className="subtitle color-gray">This is a subtitle</h6>
                  </div>
                  <div className="Card-body">
                    <span>
                      Elit non consectetur eu dolor deserunt eiusmod deserunt. 
                      Eu fugiat esse aliqua magna excepteur irure minim. Id tempor esse cillum aliquip enim.
                    </span>
                  </div>
                  <div className="Card-footer">
                    <button className="Button Button--primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="Card">
                <div className="Card-header">
                  <h5 className="Title">Card Title</h5>
                  <h6 className="subtitle color-gray">This is a subtitle</h6>
                </div>
                <div className="Card-body">
                  <span>
                    Elit non consectetur eu dolor deserunt eiusmod deserunt. 
                    Eu fugiat esse aliqua magna excepteur irure minim. Id tempor esse cillum aliquip enim.
                  </span>
                </div>
                <div className="Card-footer">
                  <button className="button button--primary">Submit</button>
                </div>
              </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>


      <section id="themes" className="fr-DocsArticle-section">
        <article className="article">
          <div className="Heading">
            <h4 className="Title">Themes</h4>
          </div>
          <p>Dolore est excepteur culpa voluptate culpa quis dolor 
            ipsum et et exercitation.</p>
        </article>
      </section>

      <section id="card-with-thumbnail" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Card with Thumbnail</h4>
        </div>
        <p>
          Minim fugiat ad aliquip aute magna in aliquip cupidatat incididunt.
          Voluptate Lorem incididunt velit do in do eu laboris consectetur nulla
          ullamco.
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="Grids">
              <div className="grid grid-6">
                <div className="Card">
                  <div className="Card-image">
                    <img src={PhotoDummy} />
                  </div>
                  <div className="Card-body">
                    <h5 className="Title">Card Title</h5>
                    <h6 className="subtitle color-gray">This is a subtitle.</h6>
                    <p>
                      Tempor eiusmod excepteur esse culpa qui elit sint aliqua
                      dolor. Qui mollit esse officia labore deserunt laborum
                      dolore. Adipisicing mollit dolore eiusmod aute pariatur
                      nulla culpa laborum culpa et dolore aute aute. Aute
                      voluptate excepteur velit proident laboris qui.
                    </p>
                  </div>
                  <div className="Card-footer">
                    <button className="button button--primary">Submit</button>
                  </div>
                </div>
              </div>
              <div className="grid grid-6">
                <div className="Card">
                  <div className="Card-header">
                    <h5 className="Title">Card Title</h5>
                    <h6 className="subtitle color-gray">This is a subtitle. </h6>
                  </div>
                  <div className="Card-image">
                    <img src={PhotoDummy} />  
                  </div>
                  <div className="Card-body">
                    Culpa ea reprehenderit Lorem ad voluptate. Ad voluptate eu cillum reprehenderit. 
                    Nisi sit laborum dolore exercitation.
                  </div>
                  <div className="Card-footer">
                    <button className="button button--primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="Card">
              <div className="Card-image">
                <img src="path/to/image" />
              </div>
              <div className="Card-body">
                <h5 className="Title">Card Title</h5>
                <h6 className="subtitle color-gray">This is a subtitle.</h6>
                <p>
                  Tempor eiusmod excepteur esse culpa qui elit sint aliqua
                  dolor. Qui mollit esse officia labore deserunt laborum
                  dolore. Adipisicing mollit dolore eiusmod aute pariatur
                  nulla culpa laborum culpa et dolore aute aute. Aute
                  voluptate excepteur velit proident laboris qui.
                </p>
              </div>
              <div className="Card-footer">
                <button className="button button--primary">Submit</button>
              </div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>

      <section id="overlay" className="fr-DocsArticle-section">
        <article className="article">
          <div className="Heading">
            <h4 className="Title">Card with Image Overlay</h4>
          </div>
          <p>Est anim in in fugiat mollit sunt consectetur cupidatat deserunt.</p>
          <Preview>
            <PreviewDisplay>
              <div className="card card--dark card--has-overlay" style={{maxWidth: '400px'}}>
                <div className="card-image">
                  <img src={PhotoDummy} />
                </div>
                <div className="card-body">
                  <h5 class="title">Lorem ea non cillum.</h5>
                  <span>
                    Cupidatat duis proident exercitation ullamco sunt
                    labore.
                  </span>
                </div>
              </div>
            </PreviewDisplay>
            <PreviewHighlight lang="html">
              {`<div class="card card--dark card--has-overlay">
                <div class="card-image">
                  <img src="path/to/image" />
                </div>
                <div class="card-body">
                  <h5 class="title">Lorem ea non cillum.</h5>
                  <span>
                    Cupidatat duis proident exercitation ullamco sunt
                    labore.
                  </span>
                </div>
              </div>
              `}
            </PreviewHighlight>
          </Preview>
          
          <div className="fr-preview">
            <span className="fr-preview-tag">Preview</span>
            <div className="fr-preview-display">
              <div className="Grids">
                <div className="grid grid-6 u-MarginBottom">
                  <div className="card card--dark card--has-overlay">
                    <div className="card-image">
                      <img src={PhotoDummy} />
                    </div>
                    <div className="card-body">
                      <h5 class="title">Lorem ea non cillum.</h5>
                      <span>
                        Cupidatat duis proident exercitation ullamco sunt
                        labore.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="section">
        <article className="article">
          <div className="Heading">
            <h4 className="Title">Borderless Card</h4>
            <h6 className="subtitle color-gray">
              Eu duis irure proident pariatur est commodo eu veniam ut.
            </h6>
          </div>
          <div className="fr-preview">
            <span className="fr-preview-tag">Preview</span>
            <div className="fr-preview-display">
              <div className="Grids">
                <div className="grid grid-6 u-MarginBottom">
                  <div className="card card--transparent">
                    <div className="card-image">
                      <img src={PhotoDummy} />
                    </div>
                    <div className="card-body">
                      <article className="article">
                        <div className="Heading">
                          <h5 className="Title">This is an example card</h5>
                          <h6 className="subtitle color-gray">
                            Tempor ad adipisicing fugiat labore et exercitation.
                          </h6>
                        </div>
                        <p>
                          Quis quis mollit ipsum sint aliquip occaecat veniam
                          nulla do incididunt non ipsum consectetur duis.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </article>
  );
};

Card.propTypes = {};

export default Card;
