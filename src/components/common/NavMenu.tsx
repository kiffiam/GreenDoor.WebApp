import * as React from 'react';
import {
    Collapse, Container, Navbar, NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../css/NavMenu.css';
import { User, UserRoles } from '../../model/User/User';
import { ApplicationState } from '../../redux/Store';
import { connect } from 'react-redux';
import { logOutAction } from "../../redux/Users/UserActions"

export interface Prop {
    currentUser: User;
    logOutAction: typeof logOutAction;

}

class NavMenu extends React.PureComponent<Prop, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} className="text-green" to="/">Green Door Rooms</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Rooms">Rooms</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/MyReservations">My Reservations</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Reviews">Reviews</NavLink>
                                </NavItem>
                                {this.props.currentUser.id === "" &&
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/Login">Login</NavLink>
                                    </NavItem>
                                }
                                {this.props.currentUser.id === "" &&
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/Register">Register</NavLink>
                                    </NavItem>
                                }
                                {this.props.currentUser.id !== "" &&
                                    <NavItem>
                                        <Button tag={Link} className="text-dark"
                                            color="#FFFFFF"
                                            onClick={() => this.props.logOutAction()}
                                            to="/HomePage">Logout</Button>
                                    </NavItem>
                                }
                                {this.props.currentUser.role === UserRoles.Admin &&
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Admin
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink tag={Link} className="text-dark" to="/Admin/Rooms">Rooms</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink tag={Link} className="text-dark" to="/Admin/AddRoom">Add Room</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink tag={Link} className="text-dark" to="/Admin/Reservations">Reservations</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink tag={Link} className="text-dark" to="/Admin/UserList">User List</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink tag={Link} className="text-dark" to="/Admin/AddFeedPost">New FeedPost</NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                }
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    };

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        logOutAction: () => dispatch(logOutAction())
    };
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        currentUser: store.users.currentUser || undefined
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu)
