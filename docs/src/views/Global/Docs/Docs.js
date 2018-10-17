import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropsRoute } from 'components/Utilities';
import DocsMenu from './DocsMenu';

const Docs = props => {
	const { routes } = props;
	
	return (
		<div className="fr-docs">
			<div className="container">
				<div className="grids">
					<div className="grid">
						<aside className="fr-aside">
							<DocsMenu {...props} />
						</aside>
					</div>
					<div className="grid grid-9">
						<main className="pd-top-x-large pd-right">
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
			</div>
		</div>
	);
}

export default Docs;