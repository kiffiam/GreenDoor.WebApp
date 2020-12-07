import * as React from 'react';
import { User } from "../../model/User/User"
import { ReviewModel } from "../../model/Review/ReviewModel"
import { Button, Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import "../../css/Rater.css"

export interface Props {
    currentUser: User;
    handleSubmitReview: (reviewModel: ReviewModel, roomId: number) => void;
    roomName: string;
    roomId: number
}

export interface State {
    review: ReviewModel;
    redirect: boolean;
}

class AddReviewComponent extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            review: {
                id: 0,
                point: 0,
                reviewText: ""
            },
            redirect: false
            //error: false
        }
    }

    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var result = await this.props.handleSubmitReview(this.state.review, this.props.roomId);
        this.setState(state => ({
            review: {
                ...state.review,
            },
            redirect: true
        }));
        return false;
    }

    private handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            review: {
                ...state.review,
                point: parseInt(e.target.value, 10)
            }
        }));
    }

    private handleReviewTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            review: {
                ...state.review,
                reviewText: e.target.value
            }
        }));
    }

    render() {
        return (
            <Container>
                <Form validated={true}
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        this.handleSubmit(e)
                    }>
                    <Label className="h2 mb-3">Write a Review for room: {this.props.roomName}</Label>
                    <FormGroup row>
                        <Col sm={7}>
                            <Input
                                value={this.state.review.reviewText}
                                placeholder="Your review"
                                onChange={e => this.handleReviewTextChange(e)}
                                maxLength={1000}
                                valid={this.state.review.reviewText.length >= 5}
                                type="textarea" />
                        </Col>
                        <Label sm={1}>Point:</Label>
                        <Col sm={2}>
                            <Input type="select"
                                value={this.state.review.point}
                                onChange={e => this.handlePointChange(e)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Button type="submit"
                        title="AddReview"
                        color="primary"
                    > Add review
                    </Button>
                    {this.state.redirect && <Redirect to="/Reviews" />}
                </Form>
            </Container>
        );
    }
}

export default AddReviewComponent;