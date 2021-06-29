import { Row, Col, Card } from 'react-bootstrap';
import LoginForm from '../components/forms/LoginForm';

const Login = props => {
    return (
        <Row className="justify-content-md-center">
            <Col md="8">
                <Card>
                    <Card.Body>
                        <Card.Title className="mb-5">
                            Login
                        </Card.Title>
                        <LoginForm />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Login;