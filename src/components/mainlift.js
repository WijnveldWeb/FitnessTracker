import '../css/main.scss';

function Lift(props) {
	return (
		<div class="card flex-it f-align-center f-row">
			<img src={props.liftimage} alt="" />
			<div class="info">
				<p>{props.liftname}</p>
				<p class="subtitel">Updated on: {props.liftdate}</p>
				<div class="progresstext flex-it f-just-between f-align-center f-row">
					<p>{props.liftweight}kg</p>
					<p>Doel 2020: {props.liftgoal}kg</p>
				</div>
				<div class="progressbar">
					<span />
				</div>
			</div>
		</div>
	);
}

export default Lift;
