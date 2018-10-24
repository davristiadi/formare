import React from 'react'
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';
import "./Grid.scss";
import { Highlight } from 'components/Highlight';

const Grid = props => {
    return (
        <div id="grid">
            <article className="fr-article">
                <div className="fr-heading">
                    <h2 className="title">Grid System</h2>
                </div>
                <section className="section">
                    <div className="heading">
                        <h4 className="title">Overview</h4>
                    </div>
                    <p>
                        The grid system is one of the most essential element in any modern websites. It makes any website design look good
                        in any device resolutions.
                    </p>
                    <div className="fr-example-grids mg-bottom-large">
                        <div className="grids">
                            <div className="grid">Grid #1</div>
                            <div className="grid">Grid #2</div>
                            <div className="grid">Grid #3</div>
                        </div>
                    </div>

                    <Highlight lang="html">
                        {`<div class="grids">
                                <div class="grid">Grid #1</div>
                                <div class="grid">Grid #2</div>
                                <div class="grid">Grid #3</div>
                            </div>
                        `}
                    </Highlight>
                </section>
            </article>
        </div>
    )
}

Grid.propTypes = {
    
}

export default Grid