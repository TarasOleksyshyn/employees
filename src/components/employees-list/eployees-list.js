import EmployeesListItem from '../employees-list-item/employees-list-item';

import './eployees-list.css';

function EployeesList({ data, onDelete }) {

	const elements = data.map(item => {
		const { id, ...itemProps } = item;

		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
			/>
		);
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
}

export default EployeesList;