import '../css/main.scss';
import portret from '../images/portret.png';
import dashimg from '../images/Icon-material-dashboard@2x.png';
import settingsimg from '../images/Icon-ionic-ios-settings@2x.png';

function Header() {
	return (
		<header className="flex-it f-col f-just-between">
			<div className="top flex-it f-col f-just-start">
				<h1>Fitmonitor</h1>
				<div className="personcard f-align-center flex-it f-row f-just-start">
					<img src={portret} alt="" />
					<div className="text">
						<p className="name">Erwin Wijnveld</p>
						<p>Fitness</p>
					</div>
				</div>
				<div className="dashboard flex-it f-row f-just-start f-align-center">
					<img src={dashimg} alt="" />
					<p>Dashboard</p>
				</div>
			</div>
			<div className="bottom flex-it f-row f-align-center">
				<img src={settingsimg} alt="" />
				<p>Settings</p>
			</div>
		</header>
	);
}
export default Header;
