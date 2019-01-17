import React, { Component } from 'react';
import Docs from './Docs';
import {
	Start,
	Installation
} from './Start';

import {
	Components,
    Alert,
    Nav,
    Navbar,
    Button,
    Card,
    Table
} from './Components';


import { 
	Layouts,
	Grid,
	Structure
} from './Layouts';

import {
	Forms,
	Overview,
	Inputs,
	InputSet
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
					hasChildren: [
						{
							path: '/docs/start/installation',
							title: 'Installation',
							component: Installation
						}
					]
				},
				{
					path: '/docs/layouts',
					title: 'Layouts',
					component: Layouts,
					hasChildren: [
						{
							path: '/docs/layouts/grid-system',
							title: 'Grid System',
							component: Grid
						},
						{
							path: '/docs/layouts/structure',
							title: 'Structure',
							component: Structure
						}
					]
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
							path: '/docs/components/navbar',
							title: 'Navbar',
							component: Navbar
						},
						{
							path: '/docs/components/nav',
							title: 'Navigation',
							component: Nav
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
							path: '/docs/forms/overview',
							title: 'Overview',
							component: Overview
						},
						{
							path: '/docs/forms/inputs',
							title: 'Inputs',
							component: Inputs
						},
						{
							path: '/docs/forms/input-set',
							title: 'Input Set',
							component: InputSet
						}
					]
				},
				
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