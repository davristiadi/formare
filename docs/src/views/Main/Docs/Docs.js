import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropsRoute } from 'components/Utilities';
import DocsMenu from './DocsMenu';
import './Docs.scss';

const Docs = props => {
	const { routes } = props;
	
	return (
		<div className="Container">
			<div className="fr-Docs">
				<aside className="fr-DocsSidebar">
					<DocsMenu {...props} />
					<span className="fr-DocsSidebar-overlay"></span>
				</aside>
				<main className="fr-DocsContent">
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
	);
}

export default Docs;