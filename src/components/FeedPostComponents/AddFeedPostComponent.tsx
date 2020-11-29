import * as React from 'react';
import { User } from "../../model/User/User";
import { FeedPost } from "../../model/Feedpost/FeedPost"
import { Button, Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from 'react-router-dom';

export interface Props {
    currentUser: User;
    handleSubmitFeedPost: (feedPost: FeedPost) => Promise<FeedPost>;
}

export interface State {
    feedPost: FeedPost;
    redirect: boolean
}

class AddFeedPostComponent extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            feedPost: {
                id: 0,
                title: "",
                postText: "",
            },
            redirect: false
            //error: false
        }
    }

    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var result = await this.props.handleSubmitFeedPost(this.state.feedPost);
        if (result !== undefined) {
            this.setState({ redirect: true })
        }

        return false;
    }

    private handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            feedPost: {
                ...state.feedPost,
                title: e.target.value
            }
        }));
    }

    private handlePostTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            feedPost: {
                ...state.feedPost,
                postText: e.target.value
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
                    <h2>Create a Post</h2>
                    <FormGroup row>
                        <Label sm={1}>Title:</Label>
                        <Col sm={7}>
                            <Input
                                value={this.state.feedPost.title}
                                placeholder="Title"
                                onChange={e => this.handleTitleChange(e)}
                                type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={1}>Text:</Label>
                        <Col sm={7}>
                            <Input
                                value={this.state.feedPost.postText}
                                placeholder="Post"
                                onChange={e => this.handlePostTextChange(e)}
                                type="textarea" />
                        </Col>
                    </FormGroup>
                    <Button
                        type="submit"
                        title="Post"
                        color="primary"
                    >Create post
                    </Button>
                    {this.state.redirect &&
                        <Redirect to="/" />
                    }
                </Form>
            </Container>
        );
    }
}

export default AddFeedPostComponent;