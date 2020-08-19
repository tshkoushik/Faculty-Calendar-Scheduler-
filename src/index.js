import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import RegistrationPage from './RegistrationPage';
//import PopulateCalendar from './PopulateCalendar';
//import PopulateTimeTable from './PopulateTimeTable';
//import ViewTimeTable from './ViewTimeTable';
//import ViewCalendar from './ViewCalendar';
import InitialPage from "./InitialPage";
//import Parent from "./Parent";
//import EditTimeTable from "./EditTimeTable";
//import sum from "./sum";
//import MyForm from "./MyForm";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<InitialPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
