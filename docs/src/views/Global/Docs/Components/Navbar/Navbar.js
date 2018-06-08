import React, { PropTypes } from 'react'

const Navbar = props => {
    return (
        <div id="navbar">
            <article class="article">
                <div class="fr-heading heading">
                    <h3 class="title">Navbar</h3>
                    <h5 class="subtitle color-gray">Consectetur non Lorem mollit incididunt nostrud qui. Tempor ea enim qui in id mollit anim consectetur id sit aute id proident. Tempor Lorem ea dolor cupidatat nulla commodo amet.</h5>
                </div>
                <div class="fr-preview">
                    <div class="fr-preview__tag">Preview</div>
                    <div class="fr-preview__display">
                        <div className="navbar">
                        	<div className="navbar__container navbar__container--full-width">
                        		<div className="navbar__block">
                        			<h5>Logo</h5>
                        		</div>
                        		<div className="navbar__block flex jc-end">
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
                    </div>
                </div>
            </article>
        </div>
    )
}

Navbar.propTypes = {
    
}

export default Navbar