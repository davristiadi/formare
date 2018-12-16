import React from 'react';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const Alert = props => {
  return (
    <article id="alerts" className="fr-article">
      <header className="fr-article-heading">
        <h2 className="fr-article-title">Alerts</h2>
        <h5 className="fr-article-subtitle">
          The easiest way to show non-interuptible feedback content with lots of
          customizations.
        </h5>
      </header>
      <section id="overview" className="fr-article-section">
        <div className="heading">
          <h4 className="title">Overview</h4>
        </div>
        <p>
          We can use alerts to notify users about something that needs attention. 
          Alerts are usually non-interuptive and should be easily dismissable.
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="Alert">
              <div className="Alert__text">This is just a simple alert.</div>
            </div>
            <div className="Alert">
              <div className="Alert__icon">
                <i className="fas fa-check"></i>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`
            <div className="Alert">
              <div className="Alert__text">Hello</div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="themes" className="fr-article-section">
        <header className="heading">
          <h4 className="title">Themes</h4>
        </header>
        <p>
          Alerts come with different <a href="">themes</a> that you can use accordingly for different contexts.
        </p>
        <ul>
          <li> <code>{`.alert--primary`}</code> </li>
          <li> <code>{`.alert--secondary`}</code> </li>
          <li> <code>{`.alert--success`}</code> </li>
          <li> <code>{`.alert--danger`}</code> </li>
          <li> <code>{`.alert--warning`}</code> </li>
          <li> <code>{`.alert--light`}</code> </li>
          <li> <code>{`.alert--dark`}</code> </li>
        </ul>
        <Preview>
          <PreviewDisplay>
            <div className="alert alert--primary mg-bottom">
              <div className="alert__body">
                This is an alert with primary theme!
              </div>
            </div>
            <div className="alert alert--secondary mg-bottom">
              <div className="alert__body">
                This is an alert with secondary theme!
              </div>
            </div>
            <div className="alert alert--success mg-bottom">
              <div className="alert__body">
                This is an alert with success theme!
              </div>
            </div>
            <div className="alert alert--warning mg-bottom">
              <div className="alert__body">
                This is an alert with warning theme!
              </div>
            </div>
            <div className="alert alert--danger mg-bottom">
              <div className="alert__body">
                This is an alert with danger theme!
              </div>
            </div>
            <div className="alert alert--light mg-bottom">
              <div className="alert__body">
                This is an alert with light theme!
              </div>
            </div>
            <div className="alert alert--dark">
              <div className="alert__body">
                This is an alert with dark theme!
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div class="alert alert--primary mg-bottom">
              <div class="alert__body">This is an alert with primary theme!</div>
            </div>
            <div class="alert alert--secondary mg-bottom">
              <div class="alert__body">This is an alert with secondary theme!</div>
            </div>
            <div class="alert alert--success mg-bottom">
              <div class="alert__body">This is an alert with success theme!</div>
            </div>
            <div class="alert alert--warning mg-bottom">
              <div class="alert__body">This is an alert with warning theme!</div>
            </div>
            <div class="alert alert--danger mg-bottom">
              <div class="alert__body">This is an alert with danger theme!</div>
            </div>
            <div class="alert alert--light mg-bottom">
              <div class="alert__body">This is an alert with light theme!</div>
            </div>
            <div class="alert alert--dark">
              <div class="alert__body">This is an alert with dark theme!</div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="extras" className="fr-article-section">
        <header className="heading">
          <h4 className="title">Icons</h4>
        </header>
        <p>
          Fugiat sit exercitation id aute dolore do officia. Aliqua non sint
          elit laborum labore occaecat ea Lorem duis velit sint cupidatat veniam
          dolor.
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="alert alert--warning mg-bottom">
              <div className="alert__icon">
                <i className="fas fa-exclamation-triangle" />
              </div>
              <span>This is an alert with an icon</span>
              {/* <div className="alert__body">This is an alert with an icon!</div> */}
            </div>
            <div className="alert alert--success mg-bottom">
              <div className="alert__icon">
                <i className="fas fa-check" />
              </div>
              <div className="alert__body">This is an alert with an icon!</div>
            </div>
            <div className="alert alert--danger">
              <div className="alert__icon">
                <i className="fas fa-times" />
              </div>
              <div className="alert__body">This is an alert with an icon!</div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

Alert.propTypes = {};

export default Alert;
