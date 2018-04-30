import React from 'react';

const Home = props => {
	return (
		<div id="home">
			<header className="navbar navbar--primary">
				<div className="navbar__container">
					<div className="navbar__block navbar__block--start">
						<h5 className="font font--bold font--x-large">Formare</h5>
					</div>
					<div className="navbar__block navbar__block--end">
						<nav className="nav">
							<ul className="nav__list">
								<li className="nav__item">
									<a className="nav__link">Home</a>
								</li>
								<li className="nav__item">
									<a className="nav__link">Documentation</a>
								</li>
								<li className="nav__item">
									<a className="nav__link">Help</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main id="main-content" className="container mg-top-x-large mg-bottom-x-large">
				<section id="heading" className="mg-bottom-x-large">
					<article className="article">
						<div className="heading">
							<h3 className="title">Heading</h3>
							<p className="subtitle">Quis amet deserunt qui culpa velit ut culpa et voluptate in consequat ullamco et laboris.</p>
						</div>
						<h1>Heading 1</h1>
						<h2>Heading 2</h2>
						<h3>Heading 3</h3>
						<h4>Heading 4</h4>
						<h5>Heading 5</h5>
						<h6>Heading 6</h6>
					</article>
				</section>
				<section id="buttons" className="mg-bottom-large">
					<article className="article">
						<div className="heading">
							<h3 className="title">Buttons</h3>
							<p className="subtitle">Aliqua velit anim consequat nostrud mollit est duis irure et ex.</p>
						</div>
						<div className="mg-bottom-large">
							<div className="heading">
								<h5 className="title">Button States</h5>
							</div>
							<button className="button mg-right mg-bottom">Button</button>
							<button className="button button--primary mg-right mg-bottom">Primary</button>
							<button className="button button--secondary mg-right mg-bottom">Secondary</button>
							<button className="button button--success mg-right mg-bottom">Success</button>
							<button className="button button--danger mg-right mg-bottom">Danger</button>
							<button className="button button--warning mg-right mg-bottom">Warning</button>
							<button className="button button--dark mg-right mg-bottom">Dark</button>
							<button className="button button--light mg-bottom">Light</button>
						</div>
						<div className="mg-bottom-large">
							<div className="heading">
								<h5 className="title">Outlined</h5>
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
						<div className="mg-bottom-large">
							<div className="heading">
								<h5 className="title">Raised</h5>
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
						<div className="mg-bottom-large">
							<div className="heading">
								<h5 className="title">Rounded</h5>
							</div>
							<button className="button button--pill button--primary mg-right">Rounded Button</button>
							<button className="button button--pill button--secondary mg-right">Rounded Button</button>
							<button className="button button--pill button--success mg-right">Rounded Button</button>
						</div>
						<div>
							<div className="heading">
								<h5 className="title">Sizes</h5>
							</div>
							<button className="button button--small margin-right">Small</button>
							<button className="button margin-right">Base</button>
							<button className="button button--large">Large</button>
						</div>
					</article>
				</section>
				<section id="cards" className="mg-bottom-large">
					<article className="article">
						<div className="heading">
							<h3 className="title">Card</h3>
							<p className="subtitle">Culpa culpa deserunt magna nostrud sunt adipisicing cillum commodo dolore cupidatat nostrud veniam. Commodo id nulla consectetur aliqua aute. Fugiat irure consectetur cillum pariatur laboris est.</p>
						</div>
						<div className="row">
							<div className="card">
							</div>
						</div>
					</article>
				</section>
				<section id="form" className="mg-bottom-large">
					<article className="article">
						<div className="heading">
							<h3 className="title">Forms</h3>
							<p>Dolor labore irure non irure in consequat est sunt fugiat aliquip ullamco.</p>
						</div>
						<input className="input" type="text" placeholder="This in an example input" />
					</article>
				</section>
			</main>
		</div>
	)
}

export default Home;