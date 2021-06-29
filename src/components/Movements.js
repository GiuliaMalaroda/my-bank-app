import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { AccountsContext } from '../context/accounts-context';

const Movements = props => {
    const { loggedInAccount } = useContext(AccountsContext);
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Value</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                { loggedInAccount.movements.map((movement, i) => {
                    if ( i === 0 ) {
                        return (
                            <tr key={i}>
                                <td className="fw-bolder">{i}</td>
                                <td colSpan="2"></td>
                                <td><span className="fw-bolder">${movement.balance}</span> - <i>Starting balance</i></td>
                            </tr>
                        )
                    } else {
                        const date = movement.datetime;
                        const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
                        
                        return (
                            <tr key={i}>
                                <td className="fw-bolder">{i}</td>
                                <td>{formattedDate}</td>
                                <td className={`fw-bolder ${movement.type === "deposit" ? "text-success" : "text-danger"}`}>
                                    {movement.type === "deposit" ? "+" : "-"} ${movement.value}
                                </td>
                                <td><span className="fw-bolder">${movement.balance}</span></td>
                            </tr>
                        )
                    }
                }) }
            </tbody>
        </Table> 
    )
}

export default Movements;