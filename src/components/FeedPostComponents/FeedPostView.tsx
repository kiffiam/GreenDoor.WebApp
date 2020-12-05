import * as React from 'react';
import { FeedPost } from '../../model/Feedpost/FeedPost';
import { Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Row } from "reactstrap"
import DateTimeFormatComponent from "../common/DateTimeFormatComponent"
import { User, UserRoles } from '../../model/User/User';
export interface Props {
    currentUser: User;
    feedPost: FeedPost
    onDeleteClicked: (id: number) => void;
}

export interface State {

}

class FeedPostView extends React.Component<Props, State> {

    private DeleteButton = () => (
        <Button
            className="btn btn-sm p-1"
            color="danger"
            onClick={() => {
                this.props.onDeleteClicked(this.props.feedPost.id);
            }}
        >
            Delete
        </Button>
    );

    render() {
        return (
            <Row className="align-items-center justify-content-center m-3">
                <Card className="col-6 p-0 m-1">
                    <CardTitle className="h5 p-0 m-2 ml-3">{this.props.feedPost.title}</CardTitle>
                    <CardBody className="pt-0">
                        <CardText className="mb-2 mt-2">{this.props.feedPost.postText}</CardText>
                    </CardBody>

                    <CardFooter className="p-1">
                        <Row className="mx-2">
                            {this.props.currentUser.role === UserRoles.Admin &&
                                <this.DeleteButton />
                            }
                            <Col className="text-right p-1"> <DateTimeFormatComponent date={this.props.feedPost.postingDate!} /></Col></Row>
                    </CardFooter>
                </Card>
            </Row>
        );
    }
}

export default FeedPostView;