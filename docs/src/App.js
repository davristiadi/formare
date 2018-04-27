import React, { Component } from 'react';

class App extends Component {
	componentDidMount = () => {
		document.title = 'Formare | Hassle-free CSS Framework to build web interfaces easily.';
	}
	
	render() {
		return (
			<div id="home">
				<header className="navbar navbar--lighter">
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
				<div className="container container--full-width">
					<div className="row">
						<div className="column column-3">
							
						</div>
						<div className="column">
							<div className="padding-top-is-x-large padding-bottom-is-x-large">
								<section id="heading">
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
								<section id="buttons" className="padding-top-is-x-large">
									<article className="article">
										<div className="heading">
											<h3 className="title">Buttons</h3>
											<p className="subtitle">Aliqua velit anim consequat nostrud mollit est duis irure et ex.</p>
										</div>
										<div className="margin-bottom">
											<button className="button margin-right">Button</button>
											<button className="button button--primary margin-right">Primary</button>
											<button className="button button--secondary margin-right">Secondary</button>
											<button className="button button--success margin-right">Success</button>
											<button className="button button--danger margin-right">Danger</button>
											<button className="button button--warning margin-right">Warning</button>
											<button className="button button--dark margin-right">Dark</button>
											<button className="button button--light">Light</button>
										</div>
										<div>
											<button className="button button--small margin-right">Small</button>
											<button className="button margin-right">Base</button>
											<button className="button button--large">Large</button>

										</div>
									</article>
								</section>
								<section id="card" className="padding-top-is-x-large">
									<article className="article">
										<div className="heading">
											<h3 className="title">Card</h3>
											<p className="subtitle">Culpa culpa deserunt magna nostrud sunt adipisicing cillum commodo dolore cupidatat nostrud veniam. Commodo id nulla consectetur aliqua aute. Fugiat irure consectetur cillum pariatur laboris est.</p>
										</div>
										<div className="row">
											<div className="column column-6">
												<div className="card card--lighter">
													<div className="card__header">
														<span className="font font--large font--bold">This is a card</span>
													</div>
													<div className="card__body">
														<article className="article">
															<h5 className="font--medium">This is an example card content</h5>
															<p>Proident et quis sunt enim adipisicing consequat nulla do quis. Ipsum esse fugiat elit est cillum id laboris ullamco sint qui. Eu tempor sint sit esse mollit ea aliquip elit non. Sint ut esse ea deserunt velit incididunt sint laborum dolor duis occaecat minim. Et eu consequat proident incididunt minim nostrud eiusmod reprehenderit mollit do deserunt ad nisi. Nisi ea dolor proident consequat mollit est aliqua ullamco sit exercitation elit do deserunt Lorem.</p>
														</article>
													</div>
													<div className="card__footer flex justify-content--end">
														<button className="button button--danger margin-right">Cancel</button>
														<button className="button button--primary">Submit</button>
													</div>
												</div>
											</div>
											<div className="column column-6">
												<div className="card card--lighter">
													<div className="card__header">
														<span className="font font--large font--bold">This is a card</span>
													</div>
													<div className="card__body">
														<article className="article">
															<h5 className="font--medium">This is an example card content</h5>
															<p>Proident et quis sunt enim adipisicing consequat nulla do quis. Ipsum esse fugiat elit est cillum id laboris ullamco sint qui. Eu tempor sint sit esse mollit ea aliquip elit non. Sint ut esse ea deserunt velit incididunt sint laborum dolor duis occaecat minim. Et eu consequat proident incididunt minim nostrud eiusmod reprehenderit mollit do deserunt ad nisi. Nisi ea dolor proident consequat mollit est aliqua ullamco sit exercitation elit do deserunt Lorem.</p>
														</article>
													</div>
													<div className="card__footer flex justify-content--end">
														<button className="button button--danger margin-right">Cancel</button>
														<button className="button button--primary">Submit</button>
													</div>
												</div>
											</div>
											<div className="column column-6">
												<div className="card card--dark">
													<div className="card__header">
														<span className="font font--large font--bold">This is a card</span>
													</div>
													<div className="card__body">
														<article className="article">
															<h5 className="font--medium">This is an example card content</h5>
															<p>Proident et quis sunt enim adipisicing consequat nulla do quis. Ipsum esse fugiat elit est cillum id laboris ullamco sint qui. Eu tempor sint sit esse mollit ea aliquip elit non. Sint ut esse ea deserunt velit incididunt sint laborum dolor duis occaecat minim. Et eu consequat proident incididunt minim nostrud eiusmod reprehenderit mollit do deserunt ad nisi. Nisi ea dolor proident consequat mollit est aliqua ullamco sit exercitation elit do deserunt Lorem.</p>
														</article>
													</div>
													<div className="card__footer flex justify-content--end">
														<button className="button button--danger margin-right">Cancel</button>
														<button className="button button--primary">Submit</button>
													</div>
												</div>
											</div>
											<div className="column column-6">
												<div className="card card--darker">
													<div className="card__header">
														<span className="font font--large font--bold">This is a card</span>
													</div>
													<div className="card__body">
														<article className="article">
															<h5 className="font--medium">This is an example card content</h5>
															<p>Proident et quis sunt enim adipisicing consequat nulla do quis. Ipsum esse fugiat elit est cillum id laboris ullamco sint qui. Eu tempor sint sit esse mollit ea aliquip elit non. Sint ut esse ea deserunt velit incididunt sint laborum dolor duis occaecat minim. Et eu consequat proident incididunt minim nostrud eiusmod reprehenderit mollit do deserunt ad nisi. Nisi ea dolor proident consequat mollit est aliqua ullamco sit exercitation elit do deserunt Lorem.</p>
														</article>
													</div>
													<div className="card__footer flex justify-content--end">
														<button className="button button--danger margin-right">Cancel</button>
														<button className="button button--primary">Submit</button>
													</div>
												</div>
											</div>
										</div>
									</article>
								</section>
							</div>
							
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default App;
