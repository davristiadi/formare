import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Components } from './Components';
import { Forms } from './Forms';
import { PropsRoute } from '../../../components/Utilities';
import DocsMenu from './DocsMenu';

const Docs = props => {
	return (
		<div className="fr-docs">
			<div className="container">
				<div className="grids">
					<main className="fr-docs__body grid">
						<Switch>
							<Route exact path="/docs" component={DocsHome} />
							<Route path="/docs/components" component={Components} />
							<Route path="/docs/forms" component={Forms} />
						</Switch>
					</main>
					<aside className="fr-docs__sidebar grid grid-3">
						<DocsMenu />
					</aside>
				</div>
			</div>
		</div>
	);
}

const DocsHome = props => {
	return (
		<div id="docs-home">
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