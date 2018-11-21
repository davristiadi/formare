import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropsRoute } from 'components/Utilities';
import DocsMenu from './DocsMenu';
import './Docs.scss';

const Docs = props => {
	const { routes } = props;
	
	return (
		<Fragment>
			<div className="container">
				<div className="fr-docs">
					<aside className="fr-docs-sidebar">
						<DocsMenu {...props} />
					</aside>
					<main className="fr-docs-content">
						<Switch>
							{
								routes.map(route => {
									return <PropsRoute path={route.path} component={route.component} {...route} />
								})
							}
							<Redirect exact from='/docs' to={routes[0].path} />
						</Switch>
					</main>
				</div>
			</div>
		</Fragment>
	);
}

export default Docs;