import { Row, Col, Card } from 'react-bootstrap';
import Movements from '../components/Movements';
import Accounts from '../components/Accounts';

const AllData = props => {
    return (
        <>
            <Row className="justify-content-md-center">
                <Col>
                    <Card>
                        <Card.Header>
                            Keep track of your movements
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                All data
                            </Card.Title>
                            <Card.Text>
                                <Movements />
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-5">
                <Col>
                    <Card>
                        <Card.Header>
                            A list of all available accounts
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                All users
                            </Card.Title>
                            <Card.Text>
                                <Accounts />
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>
            </Row>
        </>
    )
}

export default AllData;