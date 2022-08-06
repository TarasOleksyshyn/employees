
import './app-info.css';

function AppInfo({ companyName, employeesTotal, employeesIncreased }) {
    return (
        <header className="app-info">
            <h1>Accounting of employees in the company<br /> {companyName}</h1>
            <h2>Total number of employees: {employeesTotal}</h2>
            <h2>The award will be received: {employeesIncreased}</h2>
        </header>
    );
}

export default AppInfo;