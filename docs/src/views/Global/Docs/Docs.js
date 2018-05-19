import React from 'react';
import { Switch } from 'react-router-dom';
import { Components } from './Components';
import { Form } from './Form';
import { PropsRoute } from '../../../components/Utilities';
import DocsMenu from './DocsMenu';

const Docs = props => {
	return (
		<div className="container">
			<div className="grids">
				<aside className="fr-sidebar grid grid-3">
					<DocsMenu />
				</aside>
				<main className="fr-main grid">
					<Switch>
						<PropsRoute path="/docs/components" component={Components} {...props} />
						<PropsRoute path="/docs/form" component={Form} {...props} />
					</Switch>
				</main>
			</div>
		</div>
	);
}

export default Docs;