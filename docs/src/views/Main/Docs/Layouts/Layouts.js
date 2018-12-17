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
		<article className="fr-article">
			<header className="fr-article-heading">
				<h2 className="title">Layouts</h2>
				<h5 className="subtitle color-gray">Irure magna exercitation fugiat enim reprehenderit ex anim mollit cupidatat irure dolore cillum.</h5>
			</header>
		</article>
	);
};

Layouts.propTypes = {};

export default Layouts;
