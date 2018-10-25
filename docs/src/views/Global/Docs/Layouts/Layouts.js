import React from "react";
import { Switch, Route } from "react-router-dom";
import { Article } from "components/Article";

const Layouts = props => {
	const { routes, path } = props;

	return (
		<Switch>
			<Route exact path={path} component={Home} />
			{routes.map(route => {
				return <Route path={route.path} component={route.component} />;
			})}
		</Switch>
	);
};

const Home = () => {
	return (
		<Article>
			<header className="heading">
				<h1 className="title">Tes</h1>
			</header>
		</Article>
	);
};

Layouts.propTypes = {};

export default Layouts;
