import * as React from 'react';
import { connect } from "react-redux"
import { Container, Row } from 'reactstrap';
import { addFeedPost } from '../../api/FeedPostData';
import AddFeedPostComponent from "../../components/FeedPostComponents/AddFeedPostComponent";
import { FeedPost } from '../../model/Feedpost/FeedPost';
import { User, UserRoles } from '../../model/User/User';
import { ApplicationState } from '../../redux/Store'

export interface Props {
    currentUser: User;
}

export interface State {

}

class AddFeedPost extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
    }

    private async handleSubmitFeedPost(feedPost: FeedPost): Promise<FeedPost> {
        var result = await addFeedPost(feedPost);
        return result;
    }

    render() {
        if (this.props.currentUser.role !== UserRoles.Admin) {
            return (
                <Container>
                    <Row>
                        <h1>You have to be an admin to add posts!</h1>
                    </Row>
                </Container>
            )
        } else {
            return (
                <Container>
                    <AddFeedPostComponent
                        currentUser={this.props.currentUser}
                        handleSubmitFeedPost={this.handleSubmitFeedPost} />
                </Container>
            );
        }
    }
}




const mapStateToProps = (store: ApplicationState) => {
    return {
        currentUser: store.users.currentUser || undefined
    };
};

export default connect(
    mapStateToProps,
    null
)(AddFeedPost);