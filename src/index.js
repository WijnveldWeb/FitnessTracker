import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDA2lG6jrq8qt0Viq0CJcv1AtCLZbozcTE',
	authDomain: 'reactnativedatabase-22c1e.firebaseapp.com',
	databaseURL: 'https://reactnativedatabase-22c1e-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'reactnativedatabase-22c1e',
	storageBucket: 'reactnativedatabase-22c1e.appspot.com',
	messagingSenderId: '425213055985',
	appId: '1:425213055985:web:59541d96490430aaae6a50'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
