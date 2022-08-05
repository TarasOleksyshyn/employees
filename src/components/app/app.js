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
                { name: "Ken Dust", salary: 1000, increase: true, rise: true, id: 1 },
                { name: "Mary Jhones", salary: 1200, increase: false, rise: false, id: 2 },
                { name: "John Smith", salary: 2000, increase: false, rise: false, id: 3 },
                { name: "Andrew Bigins", salary: 800, increase: true, rise: false, id: 4 },
                { name: "Gary Emens", salary: 3500, increase: false, rise: false, id: 5 },
            ],
            term: '',
        }
        this.maxId = 6;
    }

    onDelete = (id) => {
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
            rise: false,
            id: this.maxId++,
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            })
        }))
    }

    searchEmployeer = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }


    render() {
        const { data, term } = this.state;
        const companyName = '"Roga and Kopyta"';
        const employeesTotal = this.state.data.length;
        const employeesIncreased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmployeer(data, term);

        return (
            <div className="app" >
                <AppInfo
                    companyName={companyName}
                    employeesTotal={employeesTotal}
                    employeesIncreased={employeesIncreased}
                />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EployeesList
                    data={visibleData}
                    onDelete={this.onDelete}
                    onToggleProp={this.onToggleProp}
                />

                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;