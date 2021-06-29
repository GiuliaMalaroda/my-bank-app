import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AccountsContext } from '../context/accounts-context'; 
import { Navbar, Container, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.svg';

const Navigation = props => {
    const { isLoggedIn, setIsLoggedIn, loggedInAccount, setLoggedInAccount } = useContext(AccountsContext);
    const history = useHistory();

    const onLogoutHandler = () => {
        setIsLoggedIn(false);
        setLoggedInAccount({});
        history.push({ pathname: '/login' });
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle shadow-sm"
                        alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <li className="nav-item">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip>Go to the <strong>main page</strong>.</Tooltip>} >
                                <NavLink exact to="/" className="nav-link" activeClassName="active">
                                    Home Page
                                </NavLink>
                            </OverlayTrigger>
                        </li>

                        { isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip><strong>Add some money</strong> to your account.</Tooltip>} >
                                        <NavLink exact to="/deposit" className="nav-link" activeClassName="active">
                                            Deposit
                                        </NavLink>
                                    </OverlayTrigger>
                                </li>
                                <li className="nav-item">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip><strong>Withdraw some money</strong> from your account.</Tooltip>} >
                                        <NavLink exact to="/withdraw" className="nav-link" activeClassName="active">
                                            Withdraw
                                        </NavLink>
                                    </OverlayTrigger>
                                </li>
                                <li className="nav-item">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip>See a report of <strong>all available data</strong>.</Tooltip>} >
                                        <NavLink exact to="/all-data" className="nav-link" activeClassName="active">
                                            All data
                                        </NavLink>
                                    </OverlayTrigger>
                                </li>
                            </>
                        ) : null }
                    </Nav>
                
                    { !isLoggedIn ? (
                        <Nav>
                            <li className="nav-item">
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip>Log into <strong>your account</strong>.</Tooltip>} >
                                    <NavLink exact to="/login" className="nav-link" activeClassName="active">
                                        Login
                                    </NavLink>
                                </OverlayTrigger>
                            </li>
                            <li className="nav-item">
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip>Don't have an account, yet? <strong>Create one</strong> now.</Tooltip>} >
                                    <NavLink exact to="/create-account" className="nav-link" activeClassName="active">
                                        Create account
                                    </NavLink>
                                </OverlayTrigger>
                            </li>
                        </Nav>
                    ) : (
                        <div class="row align-items-center">
                            <div className="col-auto">
                                <small>Welcome back, <span className="fw-bolder text-primary">{loggedInAccount.name}</span>!</small>
                            </div>
                            <div className="col-auto">
                                <button 
                                    class="btn btn-sm btn-danger"
                                    onClick={onLogoutHandler} >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;