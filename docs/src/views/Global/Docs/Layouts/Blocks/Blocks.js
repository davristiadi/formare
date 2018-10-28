import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';
import './Blocks.scss';

class Blocks extends PureComponent {
	render() {
		return (
			<div id="blocks">
				<article className="fr-article">
					<div className="fr-article-heading">
						<h2 className="fr-article-title">Blocks</h2>
						<h5 className="fr-article-subtitle">Create simple block-based layouts for nearly any purposes.</h5>
					</div>
					<section id="overview" className="fr-article-section">
						<div className="heading">
							<h4 className="title">Overview</h4>
						</div>
						<p>Ea irure aliqua non duis laboris sunt tempor qui veniam irure officia enim irure fugiat. In veniam laboris tempor et proident incididunt officia.</p>
						<p>Id voluptate est commodo adipisicing id irure sint aliquip enim Lorem ullamco magna.</p>
						<ul>
							<li><code>Blocks</code></li>
							<li><code>Header</code></li>
							<li><code>Content</code></li>
							<li><code>Sidebar</code></li>
							<li><code>Footer</code></li>
						</ul>
					</section>
					<section id="basic" className="fr-article-section">
						<div className="heading">
							<h4 className="title">Basic Example</h4>
						</div>
						<p>Non ut ipsum dolor enim occaecat labore.</p>
						<Preview>
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
						</Preview>
					</section>
					
				</article>
			</div>
		);
	}
}

Blocks.propTypes = {

};

export default Blocks;