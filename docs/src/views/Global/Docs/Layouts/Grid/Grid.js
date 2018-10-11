import React from 'react'
import { Preview, PreviewDisplay, PreviewCode } from 'components/Preview';
import "./Grid.scss";

const Grid = props => {
    return (
        <div id="grid">
            <article className="fr-article">
                <div className="fr-heading">
                    <h3 className="title">Grids</h3>
                    <h4 className="subtitle color-gray">
                        Grids are one of the most essential layouts to build responsive and fluid web apps.
                    </h4>
                </div>
                <article className="article">
                    <section className="section">
                        <div className="heading">
                            <h4 className="title">Overview</h4>
                        </div>
                        <p>
                            Our grid system is easy to implemment and essentially only require you two elements at minimum.
                            First, add the mandatory <code>{`.grids`}</code> container class, then add as many <code>{`.grid`}</code>{" "} 
                            element inside as many as you need.
                        </p>
                        <Preview>
                            <PreviewDisplay>
                                <div className="fr-grid-example">
                                    <div className="grids">
                                        <div className="grid">Grid #1</div>
                                        <div className="grid">Grid #2</div>
                                        <div className="grid">Grid #3</div>
                                    </div>
                                </div>
                            </PreviewDisplay>
                            <PreviewCode lang="html">
                                {`<div class="grids">
                                    <div class="grid">Grid #1</div>
                                    <div class="grid">Grid #2</div>
                                    <div class="grid">Grid #3</div>
                                </div>
                                `}
                            </PreviewCode>
                        </Preview>
                    </section>
                </article>
            </article>
        </div>
    )
}

Grid.propTypes = {
    
}

export default Grid