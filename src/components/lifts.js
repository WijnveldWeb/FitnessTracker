import React, { Component } from 'react';
import firebase from 'firebase';
import benchimg from '../images/Component-6-–-1@2x.png';

export class Liftstest extends Component {
	constructor(props) {
		super(props);
	}

	removeLift(id) {
		firebase.database().ref('lifts').child(id).remove();
	}

	render() {
		return (
			<div>
				{this.props.lifts.map((lift) => (
					<div class="card flex-it f-align-center f-row" key={lift.id}>
						<img src={benchimg} alt="" />
						<div class="info">
							<p>{lift.title}</p>
							<p class="subtitel">Uploaded on: {lift.date}</p>
							<div class="progresstext flex-it f-just-between f-align-center f-row">
								<p>{lift.gewicht}kg</p>
								<p>Doel 2020: {lift.goal}kg</p>
							</div>
							<div class="progressbar">
								<span style={{ width: 100 / lift.goal * lift.gewicht + '%' }} />
							</div>
							<button className="removebutton" onClick={() => this.removeLift(lift.id)}>
								Remove
							</button>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default Liftstest;
