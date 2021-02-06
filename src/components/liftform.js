import React, { Component } from 'react';
import firebase from 'firebase';

export class Liftform extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			gewicht: '',
			date: '',
			goal: ''
		};
		this.createLift = this.createLift.bind(this);
	}

	onChangeHandler(evt, key) {
		this.setState({
			[key]: evt.target.value
		});
	}

	createLift() {
		if (this.state.title !== '' && this.state.gewicht !== '' && this.state.date !== '' && this.state.goal !== '') {
			firebase.database().ref('lifts').push({
				title: this.state.title,
				gewicht: this.state.gewicht,
				date: this.state.date,
				goal: this.state.goal
			});
		}
	}

	render() {
		return (
			<section className="liftform">
				<h3>Maak nieuwe lift aan</h3>
				<div className="form-group">
					<label htmlFor="liftform-lift">Lift naam:</label>
					<input
						type="text"
						id="liftform-lift"
						value={this.state.title}
						onChange={(evt) => this.onChangeHandler(evt, 'title')}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="liftform-liftweight">Lift gewicht:</label>
					<input
						type="text"
						id="liftform-liftweight"
						value={this.state.gewicht}
						onChange={(evt) => this.onChangeHandler(evt, 'gewicht')}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="liftform-liftdate">Lift Datum:</label>
					<input
						type="text"
						id="liftform-liftdate"
						value={this.state.date}
						onChange={(evt) => this.onChangeHandler(evt, 'date')}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="liftform-liftgoal">Lift Doel:</label>
					<input
						type="text"
						id="liftform-liftgoal"
						value={this.state.goal}
						onChange={(evt) => this.onChangeHandler(evt, 'goal')}
					/>
				</div>
				<button onClick={this.createLift}>Voeg toe</button>
			</section>
		);
	}
}

export default Liftform;
