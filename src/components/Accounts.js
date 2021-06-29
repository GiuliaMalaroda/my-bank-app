import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { AccountsContext } from '../context/accounts-context';

const Accounts = props => {
    const { accounts } = useContext(AccountsContext);
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                { accounts.map((account, i) => {
                    return (
                        <tr key={i}>
                            <td className="fw-bolder">{i}</td>
                            <td>{account.email}</td>
                            <td>{account.name}</td>
                            <td>{account.password}</td>
                            <td><span className="fw-bolder">${account.balance}</span></td>
                        </tr>
                    )
                }) }
            </tbody>
        </Table> 
    )
}

export default Accounts;