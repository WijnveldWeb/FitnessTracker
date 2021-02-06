import './css/main.scss';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import firebase from 'firebase';

function App() {
	return (
		<div className="app">
			<main class="home flex-it f-align-center f-just-center">
				<div class="home-inner flex-it f-row f-just-center f-align-center">
					<Header />
					<Main />
					<Footer />
				</div>
			</main>
		</div>
	);
}

export default App;
