import * as React from 'react';
import { Container, CardText, Card, CardHeader, Col, Row, CardFooter, CardBody } from 'reactstrap';
import { ReviewViewModel } from "../../model/Review/ReviewViewModel"
import { getReviews } from "../../redux/Reviews/ReviewActions";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import "../../css/Rater.css"

export interface Props {
    review: ReviewViewModel;

}

export interface State {

}

class ReviewComponent extends React.Component<Props, State> {
    render() {
        return (
            <Container className="m-3">
                <Col >
                    <Card className="card sm-1">
                        <CardHeader className="pl-2 pr-2 pt-1 pb-1">
                            <Row>
                                <Col className="text-left" >User: {this.props.review.userName}</Col>
                                <Col className="text-right">Room: {this.props.review.roomName}</Col>
                            </Row>
                        </CardHeader>
                        <CardBody className="p-2">
                            <CardText >
                                {this.props.review.reviewText}
                            </CardText>
                        </CardBody>
                        <CardFooter className="pl-2 pr-2 pt-1 pb-1">
                            <Rater
                                total={5}
                                rating={this.props.review.point}
                                interactive={false}
                            />
                        </CardFooter>
                    </Card>
                </Col>
            </Container>
        );
    }
}

export default ReviewComponent;