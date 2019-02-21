import React from "react";
import './Card.scss';
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";
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
        <Preview layout="horizontal">
          <PreviewDisplay>
            <div className="Card">
              <div className="Card-header">
                <h5 className="Title">Card Title</h5>
                <h6 className="Subtitle u-Color-gray">This is a subtitle</h6>
              </div>
              <div className="Card-body">
                <p className="u-mg-bottom-large">Ut eiusmod magna laboris deserunt sunt duis et id adipisicing et elit. 
                  Tempor ipsum consectetur enim nisi tempor culpa ex aliquip ad proident.
                  Velit sint ad sit sint sint et aliqua consequat commodo est laboris enim consectetur.
                </p>
                <div>
                  <button className="Button Button--primary Button--fullWidth">Submit</button>
                </div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="Card">
                <div className="Card-header">
                  <h5 className="Title">Card Title</h5>
                  <h6 className="Subtitle u-Color-gray">This is a subtitle</h6>
                </div>
                <div className="Card-body">
                  <p>Ut eiusmod magna laboris deserunt sunt duis et id adipisicing et elit. 
                    Tempor ipsum consectetur enim nisi tempor culpa ex aliquip ad proident.
                    Velit sint ad sit sint sint et aliqua consequat commodo est laboris enim consectetur.
                  </p>
                </div>
                <div className="Card-footer">
                  <button className="Button Button--primary">Submit</button>
                </div>
              </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>

      <section id="themes" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Themes</h4>
        </div>
        <p>Dolore est excepteur culpa voluptate culpa quis dolor 
          ipsum et et exercitation.</p>
        <Preview>
          <PreviewDisplay>
            <div className="fr-CardExample">
              <div className="Grids">
                <div className="Grid Grid-12 Grid-xl-6 u-MarginBottom-base">
                  <div className="Card Card--primary">
                    <div className="Card-header">
                      <h5 className="Title">Primary Theme</h5>
                    </div>
                    <div className="Card-body">
                      <div>
                        Cupidatat ut esse eiusmod pariatur. Voluptate culpa eu reprehenderit eu voluptate sit ad nisi. 
                        Minim pariatur aliqua aliqua adipisicing mollit laborum Lorem. Quis ipsum velit et nulla Lorem enim 
                        aliquip exercitation ad elit ad reprehenderit. Voluptate minim duis incididunt elit amet velit dolor. 
                        Sunt occaecat dolore irure magna sit incididunt anim consequat consequat.
                      </div>
                    </div>
                    <div className="Card-footer">
                      <button className="Button Button--light Button--outlined">Submit</button>
                    </div>
                  </div>
                </div>
                <div className="Grid Grid-12 Grid-xl-6 u-MarginBottom-base">
                  <div className="Card Card--dark">
                    <div className="Card-header">
                      <h5 className="Title">Secondary Theme</h5>
                    </div>
                    <div className="Card-body">
                      <div>
                        Cupidatat ut esse eiusmod pariatur. Voluptate culpa eu reprehenderit eu voluptate sit ad nisi. 
                        Minim pariatur aliqua aliqua adipisicing mollit laborum Lorem. Quis ipsum velit et nulla Lorem enim 
                        aliquip exercitation ad elit ad reprehenderit. Voluptate minim duis incididunt elit amet velit dolor. 
                        Sunt occaecat dolore irure magna sit incididunt anim consequat consequat.
                      </div>
                    </div>
                    <div className="Card-footer">
                      <button className="Button Button--primary">Submit</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </PreviewDisplay>
        </Preview>
      </section>

      <section id="images" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Images</h4>
        </div>
        <p>Support for images are also available and is highly recommended to be put inside of your card component
          in hope to better emphasize the the information you are trying to provide to your users.
          There are a few options you can choose, including adding an image thumbnail and overlaying your image choice as the
          card content's background.
        </p>

        <div className="Heading">
          <h5 className="Title">Thumbnail</h5>
        </div>
        <p>Simply add <code>.Card-image</code> element inside of the <code>.Card</code> component, including the preferred
          <code>{`<img>`}</code> of your choice to add an image to your card.
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="Grids">
              <div className="Grid Grid-6">
                <div className="Card">
                  <div className="Card-image">
                    <img src={PhotoDummy} />
                  </div>
                  <div className="Card-body">
                    <h5 className="Title">Card Title</h5>
                    <h6 className="Subtitle u-Color-gray">This is a subtitle.</h6>
                    <p>
                      Anim aliquip esse dolore proident ut ut anim. Ut dolore proident tempor proident sunt irure.
                      Est excepteur anim aute sint dolor irure occaecat cillum tempor eu anim Lorem ullamco.
                      Tempor sit ad consequat nostrud sunt pariatur.
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
                    <h6 className="Subtitle u-Color-gray">This is a subtitle. </h6>
                  </div>
                  <div className="Card-image">
                    <img src={PhotoDummy} />  
                  </div>
                  <div className="Card-body">
                  <p>Lorem excepteur qui anim sunt ex id voluptate amet. Sint eiusmod tempor eiusmod ea dolore dolor minim esse laborum do.</p>
                  </div>
                  <div className="Card-footer">
                    <button className="Button Button--primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </PreviewDisplay>
          
        </Preview>
        
        <div className="Heading">
          <h5 className="Title">Overlay</h5>
        </div>
        <p>Est anim in in fugiat mollit sunt consectetur cupidatat deserunt.</p>
        <Preview>
          <PreviewDisplay>
            <div className="fr-CardExample">
              <div className="Grids">
                <div className="Grid Grid-6">
                  <div className="Card Card--dark Card--hasOverlay">
                    <div className="Card-image">
                      <img src={PhotoDummy} />
                    </div>
                    <div className="Card-body u-Flex-column u-JustifyContent-end">
                      <h5 class="Title">Lorem ea non cillum.</h5>
                      <p>Excepteur veniam dolor adipisicing ex sit. Dolore est laborum aute commodo nisi aliquip pariatur eu non magna.
                        Mollit amet laboris officia velit officia et ea enim ea ut quis velit officia velit.
                        Quis fugiat incididunt ad excepteur anim veniam ipsum minim nisi veniam velit ipsum do.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Grid Grid-6">
                  <div className="Card Card--primary Card--hasOverlay">
                    <div className="Card-image">
                      <img src={PhotoDummy} />
                    </div>
                    <div className="Card-body">
                      <h5 class="Title">Lorem ea non cillum.</h5>
                      <p>Excepteur veniam dolor adipisicing ex sit. Dolore est laborum aute commodo nisi aliquip pariatur eu non magna.
                        Mollit amet laboris officia velit officia et ea enim ea ut quis velit officia velit.
                        Quis fugiat incididunt ad excepteur anim veniam ipsum minim nisi veniam velit ipsum do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PreviewDisplay>
        </Preview>
      </section>
    </article>
  );
};

export default Card;
