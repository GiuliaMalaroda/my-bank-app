import { Row, Col, Card } from 'react-bootstrap';
import DepositForm from '../components/forms/DepositForm';
import Balance from '../components/Balance';

const Deposit = props => {
    return (
        <Row className="justify-content-md-center">
            <Col md="8">
                <Card>
                    <Card.Header>
                        Add some money to your account
                    </Card.Header>
                    <Card.Body>
                        <Balance />
                        <Card.Title>
                            Deposit
                        </Card.Title>
                        <Card.Text>
                            <DepositForm />
                        </Card.Text>
                    </Card.Body>
                </Card> 
            </Col>
        </Row>
    )
}

export default Deposit;