import '../css/main.scss';

import React, { Component } from 'react';

import firebase from 'firebase';
import $ from 'jquery';

import Lift from './mainlift';
import Liftform from './liftform';
import Liftstest from './lifts';

import { useState } from 'react';

export class Main extends Component {
	constructor() {
		super();
		this.state = {
			lifts: []
		};
	}

	componentDidMount() {
		this.db = firebase.database();

		this.listenForChange();

		$('.addButton').click(function() {
			$('.liftform').toggleClass('formActive');
		});
	}

	listenForChange() {
		this.db.ref('lifts').on('child_added', (snapshot) => {
			let lift = {
				id: snapshot.key,
				title: snapshot.val().title,
				gewicht: snapshot.val().gewicht,
				date: snapshot.val().date,
				goal: snapshot.val().goal
			};
			let lifts = this.state.lifts;
			lifts.push(lift);

			this.setState({
				lifts: lifts
			});
		});
		this.db.ref('lifts').on('child_removed', (snapshot) => {
			let lifts = this.state.lifts;
			lifts = lifts.filter((lift) => lift.id !== snapshot.key);

			this.setState({
				lifts: lifts
			});
		});
	}

	render() {
		return (
			<div class="library">
				<h1>Statestieken</h1>
				<p class="label">Fitness maxes en voortgang</p>
				<div class="cards flex-it f-col f-just-start">
					<Liftform />
					<Liftstest lifts={this.state.lifts} />
				</div>
				<button className="addButton">+</button>
			</div>
		);
	}
}

export default Main;
