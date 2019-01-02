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
        <header className="heading">
          <h4 className="title">Overview</h4>
        </header>
        <p>
          Labore minim adipisicing eu amet culpa nostrud labore. Dolor veniam
          ullamco enim amet magna anim. Elit fugiat nulla aliqua deserunt culpa
          ipsum fugiat.
        </p>
        <Preview>
          <PreviewDisplay>
            <button className="Button mg-right">Default Button</button>
            <button className="Button Button--primary mg-right">Primary Button</button>
            <button className="Button Button--primary mg-right" disabled>Disabled Button</button>
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
        <div className="heading">
          <h4 className="title">Themes</h4>
        </div>
        <p>
          Fugiat est pariatur velit ipsum nisi dolor proident amet culpa duis
          fugiat ullamco dolore. Ipsum occaecat anim ipsum officia irure
          proident quis occaecat amet consequat.
        </p>
        <Preview>
          <PreviewDisplay>
            <div className="mg-bottom">
              <button className="Button Button--primary mg-right">Primary</button>
              <button className="Button Button--secondary mg-right">Secondary</button>
              <button className="Button Button--success mg-right">Success</button>
              <button className="Button Button--danger mg-right">Danger</button>
              <button className="Button Button--warning mg-right">Warning</button>
            </div>
            <div>
              <button className="Button Button--dark mg-right">Dark</button>
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
        <div className="heading">
          <h4 className="title">Rounded</h4>
        </div>
        <p>Prepend <code>{`.button-pill`}</code> modifier class to transform your button component to a pill-like shape.</p>
        <Preview>
          <PreviewDisplay>
            <div>
              <button className="Button Button--pill mg-right">Rounded Button</button>
              <button className="Button Button--pill Button--primary mg-right">Primary Button</button>
              <button className="Button Button--pill Button--primary mg-right" disabled>Primary Button</button>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<button class="button button--pill">Rounded Button</button>`}
          </PreviewHighlight>
        </Preview>
      </section>

      <section id="raised" className="fr-DocsArticle-section">
        <div className="heading">
          <h4 className="title">Raised</h4>
        </div>
        <p>Id eu Lorem exercitation ex occaecat quis enim cupidatat incididunt sunt nostrud minim. Esse nulla in Lorem elit commodo.</p>
        <Preview>
          <PreviewDisplay>
            <div className="mg-bottom">
              <button className="Button Button--primary Button--raised mg-right">Primary</button>
              <button className="Button Button--secondary Button--raised mg-right">Secondary</button>
              <button className="Button Button--success Button--raised mg-right">Success</button>
              <button className="Button Button--danger Button--raised mg-right">Danger</button>
              <button className="Button Button--warning Button--raised mg-right">Warning</button>
            </div>
            <div>
              <button className="Button Button--dark Button--raised mg-right">Dark</button>
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
        <div className="heading">
          <h4 className="title">Sizes</h4>
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
            <button className="Button Button--xsmall mg-right">Extra Small</button>
            <button className="Button Button--small mg-right">Small</button>
            <button className="Button mg-right">Base</button>
            <button className="Button Button--large mg-right">Large</button>
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
