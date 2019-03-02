import React, { PropTypes } from "react";
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";
import "./Overview.scss";

const Overview = props => {
  return (
    <article className="fr-DocsArticle">
      <div className="fr-DocsArticle-heading">
        <h2 className="fr-DocsArticle-title">Overview</h2>
        <h5 className="fr-DocsArticle-subtitle">Mollit sit et aute nisi sint deserunt in velit est eiusmod amet proident veniam.</h5>
      </div>

      <section className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Example</h4>
        </div>
        <p>
          Sunt minim eiusmod exercitation laborum mollit commodo quis pariatur
          ex ut non ullamco sint ad. Minim velit fugiat aliqua reprehenderit
          officia aute magna consequat consectetur eu esse pariatur eu.
        </p>
        <Preview layout="horizontal">
          <PreviewDisplay>
            <form className="Form">
              <div className="Form-field">
                <label className="Form-label">Name</label>
                <div className="Form-control">
                  <input
                    type="input"
                    className="Input"
                    placeholder="e.g John Doe"
                  />
                </div>
              </div>
              <div className="Form-field">
                <label className="Form-label">Email</label>
                <div className="Form-control">
                  <input
                    type="text"
                    className="Input"
                    placeholder="e.g johndoe@email.com"
                  />
                </div>
              </div>
              <div className="Form-field">
                <label className="Form-label">Password</label>
                <div className="Form-control">
                  <input 
                    type="text" 
                    className="Input" 
                    placeholder="Insert your password here"
                  />
                </div>
                <div className="u-FontSize-small u-Color-gray u-MarginTop-xxsmall">
                  Password should be at least 8 characters or more.
                </div>
              </div>
            </form>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<form className="Form">
              <div className="Form-field">
                <label className="Form-label">Name</label>
                <div className="Form-control">
                  <input
                    type="input"
                    className="Input"
                    placeholder="e.g John Doe"
                  />
                </div>
              </div>
              <div className="Form-field">
                <label className="Form-label">Email</label>
                <div className="Form-control">
                  <input
                    type="text"
                    className="Input"
                    placeholder="e.g johndoe@email.com"
                  />
                </div>
              </div>
              <div className="Form-field">
                <label className="Form-label">Password</label>
                <div className="Form-control">
                  <input 
                    type="text" 
                    className="Input" 
                    placeholder="Insert your password here"
                  />
                </div>
                <div className="u-FontSize-small u-Color-gray u-mg-top-xxsmall">
                  Password should be at least 8 characters or more.
                </div>
              </div>
            </form>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

Overview.propTypes = {};

export default Overview;
