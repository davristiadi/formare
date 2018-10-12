import React from 'react'
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';
import "./Grid.scss";
import { Highlight } from 'components/Highlight';

const Grid = props => {
    return (
        <div id="grid">
            <article className="fr-article">
                <div className="fr-heading">
                    <h3 className="title">Grid System</h3>
                    <h4 className="subtitle color-gray">
                        Build responsive websites easily using our fully customizable Grid System.
                    </h4>
                </div>
                <article className="article">
                    <section className="section">
                        <div className="heading">
                            <h4 className="title">Overview</h4>
                        </div>
                        <p>
                            The grid system is one of the most essential element in any modern websites. Grid system makes any website design look good
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
            </article>
        </div>
    )
}

Grid.propTypes = {
    
}

export default Grid