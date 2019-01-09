import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropsRoute } from 'components/Utilities';
import DocsMenu from './DocsMenu';
import './Docs.scss';

const Docs = props => {
	const { routes } = props;
	
	return (
		<div className="Container Container--fullWidth">
			<div className="fr-Docs">
				<aside className="fr-DocsSidebar">
					<DocsMenu {...props} />
					<div className="fr-DocsSidebar-overlay"></div>
				</aside>
				<main className="fr-DocsContent">
					<div className="Container">
						<Switch>
							{
								routes.map(route => {
									return <PropsRoute path={route.path} component={route.component} {...route} />
								})
							}
							<Redirect exact from='/docs' to={routes[0].path} />
						</Switch>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Docs;