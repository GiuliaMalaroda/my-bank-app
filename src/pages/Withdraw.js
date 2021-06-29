import { Row, Col, Card } from 'react-bootstrap';
import WithdrawForm from '../components/forms/WithdrawForm';
import Balance from '../components/Balance';

const Withdraw = props => {
    return (
        <Row className="justify-content-md-center">
            <Col md="8">
                <Card>
                    <Card.Header>
                        Withdraw some money from your account
                    </Card.Header>
                    <Card.Body>
                        <Balance />
                        <Card.Title>
                            Withdraw
                        </Card.Title>
                        <Card.Text>
                            <WithdrawForm />
                        </Card.Text>
                    </Card.Body>
                </Card> 
            </Col>
        </Row>
    )
}

export default Withdraw;