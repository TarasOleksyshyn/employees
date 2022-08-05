import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find an employee"
            />
        );
    }
}

export default SearchPanel;