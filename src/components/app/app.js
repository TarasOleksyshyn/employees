import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EployeesList from '../employees-list/eployees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Ken Dust", salary: 1000, increase: true, id: 1 },
				{ name: "Mary Jhones", salary: 1200, increase: false, id: 2 },
				{ name: "John Smith", salary: 2000, increase: false, id: 3 },
				{ name: "Andrew Bigins", salary: 800, increase: true, id: 4 },
				{ name: "Gary Emens", salary: 3500, increase: false, id: 5 },
			]
		}
		this.maxId = 6;
	}

	removeItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(obj => obj.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			id: this.maxId++,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}


	render() {
		return (
			<div className="app" >
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EployeesList
					data={this.state.data}
					onDelete={this.removeItem}
				/>

				<EmployeesAddForm
					onAdd={this.addItem}
				/>
			</div>
		);
	}
}

export default App;