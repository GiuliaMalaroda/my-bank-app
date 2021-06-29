import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import AllData from "./pages/AllData";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

function App() {
    return (
        <Router>
            <Navigation />

            <Container className="my-5">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/create-account" component={CreateAccount} /> 
                    <Route path="/all-data" component={AllData} />
                    <Route path="/deposit" component={Deposit} />
                    <Route path="/withdraw" component={Withdraw} />
                    <Route path="/" component={Homepage} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;