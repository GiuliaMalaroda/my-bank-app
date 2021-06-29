import { Row, Col, Card } from 'react-bootstrap';
import Bank from '../images/bank.jpg'; 

const Homepage = () => {
    return (
        <Row className="justify-content-md-center text-center">
            <Col md="8">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            European Central Bank
                        </Card.Title>
                        <img 
                            className="img-fluid my-5"
                            src={Bank}
                            alt="European Central Bank" />
                        <Card.Text>
                            <span className="lead">Welcome to your <span className="text-primary fw-bolder">online banking platform</span>!</span>
                            <br /><br />
                            <b>Convenient</b> and <b>fast</b>, the digital bank is the tool we have created so that you can enjoy a bank that is always accessible in autonomy and peace of mind.
                        </Card.Text>
                    </Card.Body>
                </Card> 
            </Col>
        </Row>
    )
}

export default Homepage;