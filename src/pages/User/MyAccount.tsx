import * as React from 'react';
import { Container, Row } from 'reactstrap';
import { User } from '../../model/User/User';

export interface Props {
    currentUser: User;
}

export interface State {

}

class MyAccount extends React.Component<Props, State> {
    render() {
        if (this.props.currentUser.id == "") {
            return (
                <Container>
                    <Row>
                        <h1>You need to be logged in to see your reservations!</h1>
                    </Row>
                </Container>
            );
        }
        return (
            <div>

            </div>
        );
    }
}

export default MyAccount;