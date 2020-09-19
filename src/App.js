import React from 'react';
import Table from './Table.js';
import Modal from './Modal.js';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

class App extends React.Component {
	
	constructor() {
		super();

		this.state = {
			info: {},
			target: null,
			title: null,
			by: null,
			blurb: null, 
			backers: null,
			pledged: null
		}

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		fetch('https://cpp-tech-exercise.s3.eu-west-2.amaznaws.com/kickstarter.json', {
            mode: 'no-cors'
        })
            .then(res => res.json())
            .then(result => {
                this.setState({
                    info: JSON.parse(result)
                })
            })
            .catch(error => console.log(error));
	}

	handleClick(target, title, by, blurb, backers, pledged) {

		this.setState({
			target: target,
			title: title,
			by: by,
			blurb: blurb,
			backers: backers,
			pledged: pledged
		})
	}

	render() {
		return (
			<div className="container">
			  	<div className="">
					<h1 className="App">Kickstarter</h1>
					<Table info = {this.state.info} ModalDetails = {this.handleClick}/>
					<Modal target = { this.state.target } title = { this.state.title } by = { this.state.by } blurb = {this.state.blurb} backers = { this.state.backers } pledged = { this.state.pledged } />
			  	</div>
			</div>
		  );
	}
}

export default App;