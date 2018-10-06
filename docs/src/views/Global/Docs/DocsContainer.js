import React, { Component } from 'react';
import Docs from './Docs';
import { Start, Components, Forms } from '../Docs';
import {
    Alert,
    Nav,
    Navbar,
    Button,
    Card,
    Table
} from './Components';

import {
	General
} from './Forms';

class DocsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: [
				{
					path: '/docs/start',
					title: 'Getting Started',
					component: Start,
				},
				{
					path: '/docs/components',
					title: 'Components',
					component: Components,
					hasChildren: [
						{
							path: '/docs/components/alert',
							title: 'Alerts',
							component: Alert,
						},
						{
							path: '/docs/components/nav',
							title: 'Nav',
							component: Nav
						},
						{
							path: '/docs/components/navbar',
							title: 'Navbar',
							component: Navbar
						},
						{
							path: '/docs/components/button',
							title: 'Button',
							component: Button
						},
						{
							path: '/docs/components/card',
							title: 'Card',
							component: Card
						},
						{
							path: '/docs/components/table',
							title: 'Table',
							component: Table
						}
					]
				},
				{
					path: '/docs/forms',
					title: 'Forms',
					component: Forms,
					hasChildren: [
						{
							path: '/docs/forms/general',
							title: 'General',
							component: General
						}
					]
				}	
			]
		}
	}
	
	render() {
		return (
			<Docs
				{...this.state}
				{...this.props}
			/>
		);
	}
}

export default DocsContainer;