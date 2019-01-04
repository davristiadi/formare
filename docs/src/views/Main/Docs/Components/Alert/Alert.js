import React from 'react';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';
import './Alert.scss';

const Alert = props => {
  return (
    <article id="alert-docs" className="fr-DocsArticle">
      <section className="fr-DocsArticle-intro">
        <header className="fr-DocsArticle-heading">
          <h2 className="fr-DocsArticle-title">Alerts</h2>
          <h5 className="fr-DocsArticle-subtitle">
            Display non-interuptive and dismissable feedback message to your users.
          </h5>
        </header>
      </section>
      <section id="overview" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>
          An alert is usually consisted of <span className="u-FontWeight-semibold">a text element</span> and <span className="u-FontWeight-semibold">user actions.</span> 
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="Alert">
              <div className="Alert-text">This is just a simple alert.</div>
            </div>  
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`
            <div className="Alert">
              <div className="Alert-text">Hello</div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="themes" className="fr-DocsArticle-section">
        <header className="Heading">
          <h4 className="Title">Themes</h4>
        </header>
        <p>Alerts come with different <a href="">themes</a> that can be used accordingly in different contexts.</p>
        <ul>
          <li> <code>{`.Alert--primary`}</code> </li>
          <li> <code>{`.Alert--secondary`}</code> </li>
          <li> <code>{`.Alert--success`}</code> </li>
          <li> <code>{`.Alert--danger`}</code> </li>
          <li> <code>{`.Alert--warning`}</code> </li>
          <li> <code>{`.Alert--light`}</code> </li>
          <li> <code>{`.Alert--dark`}</code> </li>
        </ul>
        <Preview>
          <PreviewDisplay>
            <div className="Alert Alert--primary u-MarginBottom">
              <div className="Alert-text"> This is an alert with primary theme! </div>
            </div>
            <div className="Alert Alert--secondary u-MarginBottom">
              <div className="Alert-text"> This is an alert with secondary theme! </div>
            </div>
            <div className="Alert Alert--success u-MarginBottom">
              <div className="Alert-text"> This is an alert with success theme! </div>
            </div>
            <div className="Alert Alert--warning u-MarginBottom">
              <div className="Alert-text"> This is an alert with warning theme! </div>
            </div>
            <div className="Alert Alert--danger u-MarginBottom">
              <div className="Alert-text"> This is an alert with danger theme! </div>
            </div>
            <div className="Alert Alert--light u-MarginBottom">
              <div className="Alert-text"> This is an alert with light theme! </div>
            </div>
            <div className="Alert Alert--dark">
              <div className="Alert-text"> This is an alert with dark theme! </div>
            </div>  
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="Alert Alert--primary">
              <div className="Alert-text"> This is an alert with primary theme! </div>
            </div>
            <div className="Alert Alert--secondary">
              <div className="Alert-text"> This is an alert with secondary theme! </div>
            </div>
            <div className="Alert Alert--success">
              <div className="Alert-text"> This is an alert with success theme! </div>
            </div>
            <div className="Alert Alert--warning">
              <div className="Alert-text"> This is an alert with warning theme! </div>
            </div>
            <div className="Alert Alert--danger">
              <div className="Alert-text"> This is an alert with danger theme! </div>
            </div>
            <div className="Alert Alert--light">
              <div className="Alert-text"> This is an alert with light theme! </div>
            </div>
            <div className="Alert Alert--dark">
              <div className="Alert-text"> This is an alert with dark theme! </div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="extras" className="fr-DocsArticle-section">
        <header className="Heading">
          <h4 className="Title">Icons</h4>
        </header>
        <p>You can use icons to better convey the message you want to tell your users.</p>
        <Preview>
          <PreviewDisplay>
            <div className="fr-AlertShowcase">
              <div className="Alert Alert--warning u-MarginBottom">
                <div className="Alert-icon">
                  <i className="fas fa-exclamation-triangle" />
                </div>
                <div className="Alert-text">This alert contains a warning message.</div>
              </div>
              <div className="Alert Alert--success">
                <div className="Alert-icon">
                  <i className="fas fa-check" />
                </div>
                <div className="Alert-text">This alert contains a success message.</div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div class="Alert Alert--warning">
              <div class="Alert-icon">
                <i class="fas fa-exclamation-triangle" />
              </div>
              <div class="Alert-text">This is an alert with an icon!</div>
            </div>
            <div class="Alert Alert--success">
              <div class="Alert-icon">
                <i class="fas fa-check" />
              </div>
              <div class="Alert-text">This is an alert with an icon!</div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
        <div className="Heading">
          <h5 className="Title">Dismissing an Alert</h5>
        </div>
        <p>
          It is always a good idea to make your alert dismissable as one of an alert's important traits is that it
          should be non-intteruptible and does not interfere with user's action.
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="Alert Alert--warning">
              <div className="Alert-text">An alert with a close button.</div>
              <div className="Alert-icon">
                <i className="Icon fas fa-times fa-lg"></i>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div class="Alert Alert--warning">
              <div class="Alert-text">An alert with a close button.</div>
              <div class="Alert-icon">
                <i class="Icon fas fa-times fa-lg"></i>
              </div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

Alert.propTypes = {};

export default Alert;
