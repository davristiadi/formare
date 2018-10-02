import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Components } from './Components';
import { Forms } from './Forms';
import DocsMenu from './DocsMenu';

const Docs = props => {
	return (
		<div class="fr-docs">
			<div class="fr-docs__container container">
				<main className="fr-docs__content layout">
					<Switch>
						<Route exact path="/docs" component={DocsHome} />
						<Route path="/docs/components" component={Components} />
						<Route path="/docs/forms" component={Forms} />
					</Switch>
				</main>
				<aside className="fr-aside">
					<DocsMenu />
				</aside>
			</div>
		</div>
	);
}

const DocsHome = props => {
	return (
		<div>
			<article className="fr-article article">
				<div className="fr-heading heading">
					<h3 className="title">Documentation</h3>
					<h5 className="subtitle color-gray">Everything you need to get started with Formare.</h5>
				</div>
			</article>
		</div>
	)
}

export default Docs;