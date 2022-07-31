import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EployeesList from '../employees-list/eployees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    { name: "Ken Dust", salary: 1000, increase: true },
    { name: "Mary Jhones", salary: 1200, increase: false },
    { name: "John Smith", salary: 2000, increase: false },
    { name: "Andrew Bigins", salary: 800, increase: true },
    { name: "Gary Emens", salary: 3500, increase: false },
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