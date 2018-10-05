import React from 'react';
import { Preview, PreviewCode, PreviewDisplay } from 'components/Preview';

const Button = props => {
	return (
		<div id="button">
			<article className="fr-article article">
				<div className="fr-heading heading">
					<h3 className="title">Buttons</h3>
					<h5 className="subtitle color-gray">Consequat est magna et qui magna dolor consequat ex eiusmod velit sunt ullamco enim commodo laborum voluptate aliqua quis quis duis.</h5>
				</div>
				<div className="mg-bottom-x-large">
					<Preview>
						<PreviewDisplay>
							<button className="button mg-right">Default Button</button>
							<button className="button button--primary">Primary Button</button>
						</PreviewDisplay>
						<PreviewCode lang="markup"></PreviewCode>
					</Preview>
				</div>
				
				<div className="mg-bottom-x-large">
					<div className="heading">
						<h5 className="title">Button States</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<div class="fr-preview">
						<span className="fr-preview__tag">Preview</span>
						<div className="fr-preview__display">
							<div className="mg-bottom">
								<button className="button mg-right">Button</button>
							</div>
							<div className="mg-bottom">
								<button className="button button--primary mg-right">Primary</button>
								<button className="button button--secondary mg-right">Secondary</button>
								<button className="button button--success mg-right">Success</button>
								<button className="button button--danger mg-right">Danger</button>
								<button className="button button--warning mg-right">Warning</button>
							</div>
							<div>
								<button className="button button--dark mg-right">Dark</button>
								<button className="button button--light">Light</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="mg-bottom-x-large">
					<div className="heading">
						<h5 className="title">Outlined</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<div className="fr-preview">
						<span className="fr-preview__tag">Preview</span>
						<div className="fr-preview__display">
							<div className="mg-bottom">
								<button className="button button--outlined mg-right">Button</button>
							</div>
							<div className="mg-bottom">
								<button className="button button--primary button--outlined mg-right">Primary</button>
								<button className="button button--secondary button--outlined mg-right">Secondary</button>
								<button className="button button--success button--outlined mg-right">Success</button>
								<button className="button button--danger button--outlined mg-right">Danger</button>
								<button className="button button--warning button--outlined mg-right">Warning</button>
							</div>
							<div>
								<button className="button button--dark button--outlined mg-right">Dark</button>
								<button className="button button--light button--outlined">Light</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="mg-bottom-x-large">
					<div className="heading">
						<h5 className="title">Raised</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<div className="fr-preview">
						<span className="fr-preview__tag">Preview</span>
						<div className="fr-preview__display">
							<div className="mg-bottom">
								<button className="button button--raised mg-right">Button</button>
							</div>
							<div className="mg-bottom">
								<button className="button button--primary button--raised mg-right">Primary</button>
								<button className="button button--secondary button--raised mg-right">Secondary</button>
								<button className="button button--success button--raised mg-right">Success</button>
								<button className="button button--danger button--raised mg-right">Danger</button>
								<button className="button button--warning button--raised mg-right">Warning</button>
							</div>
							<div>
								<button className="button button--dark button--raised mg-right">Dark</button>
								<button className="button button--light button--raised">Light</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="mg-bottom-x-large">
					<div className="heading">
						<h5 className="title">Rounded</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<div className="fr-preview">
						<span className="fr-preview__tag">Preview</span>
						<div className="fr-preview__display">
							<button className="button button--pill button--primary mg-right">Rounded Button</button>
						</div>
					</div>
				</div>
				
				<div>
					<div className="heading">
						<h5 className="title">Sizes</h5>
						<h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
					</div>
					<div className="fr-preview">
						<div className="fr-preview__tag">Preview</div>
						<div className="fr-preview__display">
							<button className="button button--small mg-right">Small</button>
							<button className="button margin-right">Base</button>
							<button className="button button--large">Large</button>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

Button.propTypes = {
	
};

export default Button;