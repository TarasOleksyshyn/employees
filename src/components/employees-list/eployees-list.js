import EmployeesListItem from '../employees-list-item/employees-list-item';

import './eployees-list.css';

function EployeesList({ data }) {

  const elements = data.map(item => {
    const { id, ...itemProps } = item;

    return (
      <EmployeesListItem key={id} {...itemProps} />
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EployeesList;