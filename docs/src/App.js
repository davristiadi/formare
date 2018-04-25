import React, { Component } from 'react';

class App extends Component {
	componentDidMount = () => {
		document.title = 'Formare | Hassle-free CSS Framework to build web interfaces easily.';
	}
	
	render() {
		return (
			<div id="home">
				<div className="navbar navbar--is-lighter">
					<div className="navbar__container">
						<div className="navbar__block navbar__block--flex-start">
							<h5 className="font-is-bold">Formare</h5>
						</div>
						<div className="navbar__block navbar__block--flex-end">
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
				</div>
				<section id="hero" className="hero hero--is-primary">
				</section>
				<section id="heading" className="padding-top-is-x-large">
					<div className="container">
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
					</div>
				</section>
				<section id="card" className="padding-top-is-x-large">
					<div className="container">
						<article className="article">
							<div className="heading">
								<h3 className="title">Card</h3>
								<p className="subtitle">Culpa culpa deserunt magna nostrud sunt adipisicing cillum commodo dolore cupidatat nostrud veniam. Commodo id nulla consectetur aliqua aute. Fugiat irure consectetur cillum pariatur laboris est.</p>
							</div>
							<div className="row">
								<div className="column">
									<div className="card card--is-dark">
										<div className="card__header">
											<span className="font-is-x-large font-is-bold">This is a card</span>
										</div>
										<div className="card__body">
											<article className="article">
												<h5 className="font-is-medium">This is an example card content</h5>
												<p>Proident et quis sunt enim adipisicing consequat nulla do quis. Ipsum esse fugiat elit est cillum id laboris ullamco sint qui. Eu tempor sint sit esse mollit ea aliquip elit non. Sint ut esse ea deserunt velit incididunt sint laborum dolor duis occaecat minim. Et eu consequat proident incididunt minim nostrud eiusmod reprehenderit mollit do deserunt ad nisi. Nisi ea dolor proident consequat mollit est aliqua ullamco sit exercitation elit do deserunt Lorem.</p>
											</article>
										</div>
										<div className="card__footer flex justify-content--end">
											<button className="button button--is-danger margin-right">Cancel</button>
											<button className="button button--is-primary">Submit</button>
										</div>
									</div>
								</div>
								<div className="column">
									<div className="card card--is-lighter">
										<div className="card__header">
											<span className="font-is-x-large font-is-bold">This is a card</span>
										</div>
										<div className="card__body">
											<article className="article">
												<h5 className="font-is-medium">This is an example card content</h5>
												<p>Aliquip elit proident excepteur esse in do sunt fugiat velit cillum voluptate. Lorem ad ullamco ad officia ea laboris veniam nulla nisi ullamco esse mollit excepteur ex. Eiusmod Lorem voluptate cillum anim amet laboris est do do exercitation eu incididunt commodo. Magna deserunt eu enim reprehenderit officia aute occaecat elit adipisicing et laboris.</p>
											</article>
										</div>
										<div className="card__footer flex justify-content--end">
											<button className="button button--is-danger button--is-outlined margin-right">Cancel</button>
											<button className="button button--is-primary button--is-outlined">Submit</button>
										</div>
									</div>
								</div>
							</div>
						</article>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
