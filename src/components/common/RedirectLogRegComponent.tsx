import * as React from 'react';
import { Row } from "reactstrap";
import { NavLink } from 'react-router-dom';

export interface Props {
}

class RedirectLogRegComponent extends React.Component<Props> {
    render() {
        return (
            <Row className="justify-content-center">
                <NavLink className="h3 m-2" to="/Login">Login</NavLink>
                <NavLink className="h3 m-2" to="/Register">Register</NavLink>
            </Row>
        );
    }
}

export default RedirectLogRegComponent;