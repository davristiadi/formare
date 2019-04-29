import React from 'react';
import './Card.scss';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';
import { default as PhotoDummy } from '../../../../../assets/images/dummy-photo.jpeg';

const Card = props => {
  return (
    <article className="DocsArticle">
      <div className="DocsArticle-heading">
        <h2 className="DocsArticle-title">Card</h2>
        <h5 className="DocsArticle-subtitle">
          Duis irure ullamco ullamco anim aute labore mollit.
        </h5>
      </div>

      <section id="overview" className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>
          Pariatur pariatur consectetur qui ullamco Lorem amet ut officia culpa.
        </p>
        <Preview layout="horizontal">
          <PreviewDisplay>
            <div className="Card">
              <div className="Card-header">
                <h5 className="Title">Card Title</h5>
                <h6 className="Subtitle u-Color-gray">This is a subtitle</h6>
              </div>
              <div className="Card-body">
                <p className="u-mg-bottom-large">
                  Ut eiusmod magna laboris deserunt sunt duis et id adipisicing
                  et elit. Tempor ipsum consectetur enim nisi tempor culpa ex
                  aliquip ad proident. Velit sint ad sit sint sint et aliqua
                  consequat commodo est laboris enim consectetur.
                </p>
                <div>
                  <button className="Button Button--primary Button--fullWidth">
                    Submit
                  </button>
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
                <p className="u-mg-bottom-large">Ut eiusmod magna laboris deserunt sunt duis et id adipisicing et elit. 
                  Tempor ipsum consectetur enim nisi tempor culpa ex aliquip ad proident.
                  Velit sint ad sit sint sint et aliqua consequat commodo est laboris enim consectetur.
                </p>
                <div>
                  <button className="Button Button--primary Button--fullWidth">Submit</button>
                </div>
              </div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>

      <section id="themes" className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Themes</h4>
        </div>
        <p>
          Dolore est excepteur culpa voluptate culpa quis dolor ipsum et et
          exercitation.
        </p>
        <ul>
          <li>
            <code>Primary</code>
          </li>
          <li>
            <code>Secondary</code>
          </li>
          <li>
            <code>Success</code>
          </li>
          <li>
            <code>Warning</code>
          </li>
          <li>
            <code>Danger</code>
          </li>
          <li>
            <code>Dark</code>
          </li>
          <li>
            <code>Light</code>
          </li>
        </ul>
        <Preview layout="horizontal">
          <PreviewDisplay>
            <div className="Select u-mg-bottom">
              <select>
                <option>Select theme</option>
                <option>Primary</option>
                <option>Success</option>
                <option>Warning</option>
                <option>Danger</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            </div>
            <div className="CardExample">
              <div className="Card Card--primary">
                <div className="Card-header">
                  <h5 className="Title">Primary Theme</h5>
                </div>
                <div className="Card-body">
                  <p>
                    Laboris deserunt eiusmod veniam cupidatat. Laborum proident
                    reprehenderit ut nisi id elit laborum voluptate ea commodo
                    sit nostrud.
                  </p>
                  <p>
                    Et commodo dolor est do est anim eiusmod occaecat fugiat
                    non. Excepteur incididunt nulla consequat enim veniam dolor.
                  </p>
                </div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="Card Card--primary">
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
            `}
          </PreviewHighlight>
        </Preview>
      </section>

      <section id="images" className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Images</h4>
        </div>
        <p>
          Support for images are also available and is highly recommended to be
          put inside of your card component in hope to better emphasize the the
          information you are trying to provide to your users. There are a few
          options you can choose, including adding an image thumbnail and
          overlaying your image choice as the card content's background.
        </p>

        <div className="Heading">
          <h5 className="Title">Thumbnail</h5>
        </div>
        <p>
          Simply add <code>.Card-image</code> element inside of the{' '}
          <code>.Card</code> component, including the preferred
          <code>{`<img>`}</code> of your choice to add an image to your card.
        </p>
        <Preview layout="horizontal">
          <PreviewDisplay>
            <div className="Card">
              <div className="Card-image">
                <img src={PhotoDummy} />
              </div>
              <div className="Card-body">
                <h5 className="Title">Card Title</h5>
                <h6 className="Subtitle u-Color-gray">This is a subtitle.</h6>
                <p>
                  Anim aliquip esse dolore proident ut ut anim. Ut dolore
                  proident tempor proident sunt irure. Est excepteur anim aute
                  sint dolor irure occaecat cillum tempor eu anim Lorem ullamco.
                  Tempor sit ad consequat nostrud sunt pariatur.
                </p>
              </div>
              <div className="Card-footer">
                <button className="Button Button--primary">Submit</button>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="Card">
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
            `}
          </PreviewHighlight>
        </Preview>

        <div className="Heading">
          <h5 className="Title">Overlay</h5>
        </div>
        <p>Est anim in in fugiat mollit sunt consectetur cupidatat deserunt.</p>
        <Preview>
          <PreviewDisplay>
            <div className="CardExample">
              <div className="Grids">
                <div className="Grid Grid-6">
                  <div className="Card Card--dark Card--hasOverlay">
                    <div className="Card-image">
                      <img src={PhotoDummy} />
                    </div>
                    <div className="Card-body u-Flex-column u-JustifyContent-end">
                      <h5 class="Title">Lorem ea non cillum.</h5>
                      <p>
                        Excepteur veniam dolor adipisicing ex sit. Dolore est
                        laborum aute commodo nisi aliquip pariatur eu non magna.
                        Mollit amet laboris officia velit officia et ea enim ea
                        ut quis velit officia velit. Quis fugiat incididunt ad
                        excepteur anim veniam ipsum minim nisi veniam velit
                        ipsum do.
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
                      <p>
                        Excepteur veniam dolor adipisicing ex sit. Dolore est
                        laborum aute commodo nisi aliquip pariatur eu non magna.
                        Mollit amet laboris officia velit officia et ea enim ea
                        ut quis velit officia velit. Quis fugiat incididunt ad
                        excepteur anim veniam ipsum minim nisi veniam velit
                        ipsum do.
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
