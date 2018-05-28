import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	return (
		<div id="button">
			<article className="fr-article article">
				<div className="fr-heading heading">
					<h3 className="title">Buttons</h3>
					<h5 className="subtitle color-gray">Consequat est magna et qui magna dolor consequat ex eiusmod velit sunt ullamco enim commodo laborum voluptate aliqua quis quis duis.</h5>
				</div>
				<div className="mg-bottom-large">
					<div className="heading">
						<h5 className="title">Default Button</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>                        
					</div>
					<div className="fr-preview">
						<span className="fr-preview__tag">Preview</span>
						<button className="button">Button</button>
					</div>
				</div>
				<hr />
				<div className="mg-bottom-large">
					<div className="heading">
						<h5 className="title">Button States</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<div class="fr-preview">
						<span className="fr-preview__tag">Preview</span>
						<div className="fr-preview__display">
							<button className="button mg-right mg-bottom">Button</button>
							<button className="button button--primary mg-right mg-bottom">Primary</button>
							<button className="button button--secondary mg-right mg-bottom">Secondary</button>
							<button className="button button--success mg-right mg-bottom">Success</button>
							<button className="button button--danger mg-right mg-bottom">Danger</button>
							<button className="button button--warning mg-right mg-bottom">Warning</button>
							<button className="button button--dark mg-right mg-bottom">Dark</button>
							<button className="button button--light mg-bottom">Light</button>
						</div>
					</div>
				</div>
				<hr />
				<div className="mg-bottom-large">
					<div className="heading">
						<h5 className="title">Outlined</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<button className="button button--outlined mg-right mg-bottom">Button</button>
					<button className="button button--outlined button--primary mg-right mg-bottom">Primary</button>
					<button className="button button--outlined button--secondary mg-right mg-bottom">Secondary</button>
					<button className="button button--outlined button--success mg-right mg-bottom">Success</button>
					<button className="button button--outlined button--danger mg-right mg-bottom">Danger</button>
					<button className="button button--outlined button--warning mg-right mg-bottom">Warning</button>
					<button className="button button--outlined button--dark mg-right mg-bottom">Dark</button>
					<button className="button button--outlined button--light mg-bottom">Light</button>
				</div>
				<hr />
				<div className="mg-bottom-large">
					<div className="heading">
						<h5 className="title">Raised</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<button className="button button--raised mg-right mg-bottom">Button</button>
					<button className="button button--raised button--primary mg-right mg-bottom">Primary</button>
					<button className="button button--raised button--secondary mg-right mg-bottom">Secondary</button>
					<button className="button button--raised button--success mg-right mg-bottom">Success</button>
					<button className="button button--raised button--danger mg-right mg-bottom">Danger</button>
					<button className="button button--raised button--warning mg-right mg-bottom">Warning</button>
					<button className="button button--raised button--dark mg-right mg-bottom">Dark</button>
					<button className="button button--raised button--light mg-bottom">Light</button>
				</div>
				<hr />
				<div className="mg-bottom-large">
					<div className="heading">
						<h5 className="title">Rounded</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<button className="button button--pill button--primary mg-right">Rounded Button</button>
					<button className="button button--pill button--secondary mg-right">Rounded Button</button>
					<button className="button button--pill button--success mg-right">Rounded Button</button>
				</div>
				<hr />
				<div>
					<div className="heading">
						<h5 className="title">Sizes</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<button className="button button--small margin-right">Small</button>
					<button className="button margin-right">Base</button>
					<button className="button button--large">Large</button>
				</div>
			</article>
		</div>
	);
};

Button.propTypes = {
	
};

export default Button;