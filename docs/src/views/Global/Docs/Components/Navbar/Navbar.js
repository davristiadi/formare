import React from 'react'
import { Preview, PreviewHighlight, PreviewDisplay } from 'components/Preview';

const Navbar = props => {
    return (
        <div className="fr-navbar-page">
            <article className="article">
                <div className="fr-heading heading">
                    <h2 className="title">Navbar</h2>
                    <h4 className="subtitle color-gray">Consectetur non Lorem mollit incididunt nostrud qui. Tempor ea enim qui in id mollit anim consectetur id sit aute id proident. Tempor Lorem ea dolor cupidatat nulla commodo amet.</h4>
                </div>
                <Preview>
                    <PreviewDisplay>
                        <div className="navbar">
                        	<div className="navbar__container navbar__container--full-width">
                        		<div className="navbar__block">
                        			<h5>Logo</h5>
                        		</div>
                        		<div className="navbar__block navbar__block--end">
                        			<nav className="nav">
                        				<ul className="nav__list">
                        					<li className="nav__item"><a className="nav__link">Nav A</a></li>
                        					<li className="nav__item"><a className="nav__link">Nav B</a></li>
                        					<li className="nav__item"><a className="nav__link">Nav C</a></li>
                        				</ul>
                        			</nav>
                        		</div>
                        	</div>
                        </div>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<div className="navbar">
                        	<div className="navbar__container navbar__container--full-width">
                        		<div className="navbar__block">
                        			<h5>Logo</h5>
                        		</div>
                        		<div className="navbar__block navbar__block--end">
                        			<nav className="nav">
                        				<ul className="nav__list">
                        					<li className="nav__item"><a className="nav__link">Nav A</a></li>
                        					<li className="nav__item"><a className="nav__link">Nav B</a></li>
                        					<li className="nav__item"><a className="nav__link">Nav C</a></li>
                        				</ul>
                        			</nav>
                        		</div>
                        	</div>
                        </div>
                        `}
                    </PreviewHighlight>
                </Preview>
            </article>
        </div>
    )
}

Navbar.propTypes = {
    
}

export default Navbar