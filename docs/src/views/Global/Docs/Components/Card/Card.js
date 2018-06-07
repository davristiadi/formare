import React from 'react';
import PropTypes from 'prop-types';
import { default as DummyPhoto } from '../../../../../assets/images/dummy-photo.jpeg';

const Card = props => {
    return (
        <div id="card">
            <article className="article fr-article">
                <div className="heading fr-heading">
                    <h3 className="title">Card</h3>
                    <h5 className="subtitle color-gray">Culpa culpa deserunt magna nostrud sunt adipisicing cillum commodo dolore cupidatat nostrud veniam. Commodo id nulla consectetur aliqua aute. Fugiat irure consectetur cillum pariatur laboris est.</h5>
                </div>
                <section class="section">
					<article className="article">
						<div className="heading">
							<h4 className="title">Default Card</h4>
							<h6 className="subtitle color-gray">
								Sunt officia adipisicing ea consequat reprehenderit tempor non labore cupidatat aliquip 
								reprehenderit eiusmod adipisicing.
							</h6>
						</div>
						<div className="fr-preview">
							<span className="fr-preview__tag">Preview</span>
							<div className="fr-preview__display">
								<div className="grids">
									<div className="grid grid-6">
										<div className="card">
											<div className="card__header">
												<h4 className="title">Card Title</h4>
												<h5 className="subtitle color-gray">This is a subtitle.</h5>
											</div>
											<div className="card__body">
												<span>Id anim officia commodo voluptate magna aliqua. Laborum pariatur ullamco occaecat labore aliqua et quis. Eiusmod reprehenderit pariatur laborum aute Lorem nisi et. Consectetur labore est consectetur officia. Laborum minim officia irure aliquip eu commodo aute. Quis culpa reprehenderit excepteur irure in. Est minim laborum consectetur nisi aliqua in sunt do veniam.</span>
											</div>
											<div className="card__footer flex jc-end">
												<button className="button button--danger mg-right">Cancel</button>
												<button className="button button--success">Submit</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</article>
                </section>
				<hr />
				<section className="section">
					<article className="article">
						<div className="heading">
							<h4 className="title">Default Card with Image</h4>
							<h6 className="subtitle color-gray">Use it with an piece of image or photo of your choice, and place it however you like.</h6>
						</div>
						<div className="fr-preview">
							<span className="fr-preview__tag">Preview</span>
							<div className="fr-preview__display">
								<div className="grids">
									<div className="grid grid-6">
										<div className="card">
											<div className="card__image">
												<img src={DummyPhoto} /> 
											</div>
											<div className="card__header">
												<h4 className="title">Card Title</h4>
												<h5 className="subtitle color-gray">This is a subtitle.</h5>
											</div>
											<div className="card__body">
												<p>Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.</p>
											</div>
										</div>
									</div>
									<div className="grid grid-6">
										<div className="card">
											<div className="card__header">
												<h4 className="title">Card Title</h4>
												<h5 className="subtitle color-gray">This is a subtitle.</h5>
											</div>
											<div className="card__image">
												<img src={DummyPhoto} /> 
											</div>
											<div className="card__body">
												<p>Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</article>
				</section>
				<hr />
				<section className="section">
					<article className="article">
						<div className="heading">
							<h4 className="title">Card with image overlays</h4>
							<h6 className="subtitle color-gray">Card overlays are automatically borderless to make it aesthetically correct.</h6>
						</div>
						<div className="fr-preview">
							<span className="fr-preview__tag">Preview</span>
							<div className="fr-preview__display">
								<div className="grids">
									<div className="grid grid-6 mg-bottom">
										<div className="card card--dark card--has-overlay">
											<div className="card__image">
												<img src={DummyPhoto} />
											</div>
											<div className="card__body">
												<h5 class="title">Lorem ea non cillum.</h5>
												<span>Cupidatat duis proident exercitation ullamco sunt labore.</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</article>
				</section>
				<hr />
				<section className="section">
					<article className="article">
						<div className="heading">
							<h4 className="title">Borderless Card</h4>
							<h6 className="subtitle color-gray">Eu duis irure proident pariatur est commodo eu veniam ut.</h6>
						</div>
						<div className="fr-preview">
							<span className="fr-preview__tag">Preview</span>
							<div className="fr-preview__display">
								<div className="grids">
									<div className="grid grid-6 mg-bottom">
										<div className="card card--transparent">
											<div className="card__image">
												<img src={DummyPhoto} />
											</div>
											<div className="card__body">
												<article className="article">
													<div className="heading">
														<h5 className="title">This is an example card</h5>
														<h6 className="subtitle color-gray">Tempor ad adipisicing fugiat labore et exercitation.</h6>
													</div>
													<p>Quis quis mollit ipsum sint aliquip occaecat veniam nulla do incididunt non ipsum consectetur duis.</p>
												</article>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</article>
				</section>
            </article>
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;