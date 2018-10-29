import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';
import './Structure.scss';

class Structure extends PureComponent {
	render() {
		return (
			<div id="structure">
				<article className="fr-article">
					<div className="fr-article-heading">
						<h2 className="fr-article-title">Structure</h2>
						<h5 className="fr-article-subtitle">Formare's structure system handles the foundation of a page layout.</h5>
					</div>
					<section id="overview" className="fr-article-section">
						<div className="heading">
							<h4 className="title">Overview</h4>
						</div>
						<p>
							<strong>Structure</strong> layout is probably one of the most important layout system to be lay upon in a webpage, because it handles the main
							layout of a webpage.
						</p>
						{/* <p>Ea irure aliqua non duis laboris sunt tempor qui veniam irure officia enim irure fugiat. In veniam laboris tempor et proident incididunt officia.</p>
						<p>Id voluptate est commodo adipisicing id irure sint aliquip enim Lorem ullamco magna.</p> */}
						<ul>
							<li><code>Structure</code></li>
							<li><code>Header</code></li>
							<li><code>Content</code></li>
							<li><code>Sidebar</code></li>
							<li><code>Footer</code></li>
						</ul>
					</section>
					<section id="basic" className="fr-article-section">
						<div className="heading">
							<h4 className="title">Types</h4>
						</div>
						<p>Structure is made with flexibility in mind, meaning you can build any layouts as you please.</p>						
						<div className="fr-structure-example">
							<div className="structure">
								<header className="header">
									<span>Header</span>
								</header>
								<div className="content">
									<span>Content</span>
								</div>
								<footer className="footer">
									<span>Footer</span>
								</footer>
							</div>
						</div>
						<div className="fr-structure-example">
							<div className="structure">
								<header className="header">
									<span>Header</span>
								</header>
								<div className="content">
									<div className="structure structure--horizontal">
										<aside className="aside">
											Sidebar
										</aside>
										<div className="content">
											Content
										</div>
									</div>
								</div>

								<footer className="footer">
									Footer
								</footer>
							</div>
						</div>
						{/* <Preview>
							<PreviewDisplay>
								<div className="fr-block-example">
									<div className="layout">
										<header className="header">
											<span>Header</span>
										</header>
										<div className="content">
											<div className="layout">
											
											</div>
										</div>
										<footer className="footer">
										</footer>
									</div>
								</div>
							</PreviewDisplay>
						</Preview> */}
					</section>
					
				</article>
			</div>
		);
	}
}

Structure.propTypes = {

};

export default Structure;