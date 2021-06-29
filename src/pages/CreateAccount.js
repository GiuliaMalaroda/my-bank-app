import { Row, Col, Card } from 'react-bootstrap';
import CreateAccountForm from '../components/forms/CreateAccountForm';

const CreateAccount = props => {
    return (
        <Row className="justify-content-md-center">
            <Col md="8">
                <Card>
                    <Card.Body>
                        <Card.Title className="mb-5">
                            Create account
                        </Card.Title>
                        <CreateAccountForm />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default CreateAccount;