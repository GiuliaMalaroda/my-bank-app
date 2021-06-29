import { useContext } from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import { AccountsContext } from '../context/accounts-context';

const Balance = props => {
    const { loggedInAccount } = useContext(AccountsContext);

    return (
        <Alert variant="primary">
            <Row>
                <Col>Your <b>balance</b> is:</Col>
                <Col xs="auto">
                    <span className="fw-bolder h2 mb-0">${loggedInAccount.balance}</span>
                </Col>
            </Row>
             
        </Alert>
    )
}

export default Balance;