import EmployeesListItem from '../employees-list-item/employees-list-item';

import './eployees-list.css';

function EployeesList() {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name="Ken Dust" salary="1000$" />
      <EmployeesListItem name="Mary Jhones" salary="1200$" />
      <EmployeesListItem name="John Smith" salary="2000$" />
      <EmployeesListItem name="Andrew Bigins" salary="800$" />
    </ul>
  );
}

export default EployeesList;