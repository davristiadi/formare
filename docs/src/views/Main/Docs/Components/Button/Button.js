import React from "react";
import { Preview, PreviewHighlight, PreviewDisplay } from "components/Preview";
import { Highlight } from "components/Highlight";

const Button = props => {
  return (
    <article id="button" className="fr-DocsArticle">
      <div className="fr-DocsArticle-heading">
        <h2 className="fr-DocsArticle-title">Buttons</h2>
        <h5 className="fr-DocsArticle-subtitle">
          Mollit tempor Lorem veniam incididunt officia tempor.
        </h5>
      </div>
      <section id="overview" className="fr-DocsArticle-section">
        <header className="Heading">
          <h4 className="Title">Overview</h4>
        </header>
        <p>
          Labore minim adipisicing eu amet culpa nostrud labore. Dolor veniam
          ullamco enim amet magna anim. Elit fugiat nulla aliqua deserunt culpa
          ipsum fugiat.
        </p>
        <Preview>
          <PreviewDisplay>
            <button className="Button u-MarginRight">Default Button</button>
            <button className="Button Button--primary u-MarginRight">Primary Button</button>
            <button className="Button Button--primary u-MarginRight" disabled>Disabled Button</button>
            <button className="Button Button--clear">Clear Button</button>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="Button">Default Button</button>
            <button class="Button Button--primary">Primary Button</button>
            <button class="Button Button--primary" disabled>Disabled Button</button>
            <button class="Button Button--clear">Clear Button</button>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="themes" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Themes</h4>
        </div>
        <p>
          Fugiat est pariatur velit ipsum nisi dolor proident amet culpa duis
          fugiat ullamco dolore. Ipsum occaecat anim ipsum officia irure
          proident quis occaecat amet consequat.
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="u-MarginBottom">
              <button className="Button Button--primary u-MarginRight">Primary</button>
              <button className="Button Button--secondary u-MarginRight">Secondary</button>
              <button className="Button Button--success u-MarginRight">Success</button>
              <button className="Button Button--danger u-MarginRight">Danger</button>
              <button className="Button Button--warning u-MarginRight">Warning</button>
            </div>
            <div>
              <button className="Button Button--dark u-MarginRight">Dark</button>
              <button className="Button Button--light">Light</button>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="Button">Default</button>
              <button class="Button Button--primary">Primary</button>
              <button class="Button Button--secondary">Secondary</button>
              <button class="Button Button--success">Success</button>
              <button class="Button Button--danger">Danger</button>
              <button class="Button Button--warning">Warning</button>
              <button class="Button Button--dark">Dark</button>
              <button class="Button Button--light">Light</button>
              `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="pill" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Rounded</h4>
        </div>
        <p>Prepend <code>{`.button-pill`}</code> modifier class to transform your button component to a pill-like shape.</p>
        <Preview>
          <PreviewDisplay>
            <div>
              <button className="Button Button--pill u-MarginRight">Rounded Button</button>
              <button className="Button Button--pill Button--primary u-MarginRight">Primary Button</button>
              <button className="Button Button--pill Button--primary u-MarginRight" disabled>Primary Button</button>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="button button--pill">Rounded Button</button>`}
          </PreviewHighlight>
        </Preview>
      </section>

      <section id="raised" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Raised</h4>
        </div>
        <p>Id eu Lorem exercitation ex occaecat quis enim cupidatat incididunt sunt nostrud minim. Esse nulla in Lorem elit commodo.</p>
        <Preview>
          <PreviewDisplay>
            <div className="u-MarginBottom">
              <button className="Button Button--primary Button--raised u-MarginRight">Primary</button>
              <button className="Button Button--secondary Button--raised u-MarginRight">Secondary</button>
              <button className="Button Button--success Button--raised u-MarginRight">Success</button>
              <button className="Button Button--danger Button--raised u-MarginRight">Danger</button>
              <button className="Button Button--warning Button--raised u-MarginRight">Warning</button>
            </div>
            <div>
              <button className="Button Button--dark Button--raised u-MarginRight">Dark</button>
              <button className="Button Button--light Button--raised">Light</button>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="Button Button--raised">Button</button>
              <button class="Button Button--primary Button--raised">Primary</button>
              <button class="Button Button--secondary Button--raised">Secondary</button>
              <button class="Button Button--success Button--raised">Success</button>
              <button class="Button Button--danger Button--raised">Danger</button>
              <button class="Button Button--warning Button--raised">Warning</button>
              <button class="Button Button--dark Button--raised">Dark</button>
              <button class="Button Button--light Button--raised">Light</button>
            `}
          </PreviewHighlight>
        </Preview>
      </section>  

      <section id="sizes" className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Sizes</h4>
        </div>
        <p>
          Need your button bigger, or rather smaller? Append{" "}
          <code>{`.button--#{size}`}</code> modifier class to customize the size
          of a button component as needed.
        </p>
        <p>
          We've prepared several predefined sizes that you can use right
          out-of-the-box:
          <ul>
            <li><code>{`.Button--xsmall`}</code></li>
            <li><code>{`.Button--small`}</code></li>
            <li><code>{`.Button--large`}</code></li>
            <li><code>{`.Button--xlarge`}</code></li>
          </ul>
        </p>
        <Preview>
          <PreviewDisplay>
            <button className="Button Button--xsmall u-MarginRight">Extra Small</button>
            <button className="Button Button--small u-MarginRight">Small</button>
            <button className="Button u-MarginRight">Base</button>
            <button className="Button Button--large u-MarginRight">Large</button>
            <button className="Button Button--xlarge">Extra Large</button>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="Button Button--xsmall">Extra Small</button>
              <button class="Button Button--small">Small</button>
              <button class="Button">Base</button>
              <button class="Button Button--large">Large</button> 
              <button class="Button Button--xlarge">Extra Large</button>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

Button.propTypes = {};

export default Button;
