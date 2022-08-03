import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EployeesList from '../employees-list/eployees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [
		{ name: "Ken Dust", salary: 1000, increase: true, id: 1 },
		{ name: "Mary Jhones", salary: 1200, increase: false, id: 2 },
		{ name: "John Smith", salary: 2000, increase: false, id: 3 },
		{ name: "Andrew Bigins", salary: 800, increase: true, id: 4 },
		{ name: "Gary Emens", salary: 3500, increase: false, id: 5 },
	]

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EployeesList data={data} />

			<EmployeesAddForm />
		</div>
	);
}

export default App;