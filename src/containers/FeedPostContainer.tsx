import * as React from 'react';
import { connect } from "react-redux";
import { ApplicationState } from "../redux/Store";
import FeedPostView from "../components/FeedPostComponents/FeedPostView";
import { FeedPost } from '../model/Feedpost/FeedPost';
import { getFeedPosts } from "../redux/FeedPosts/FeedPostsActions";
import { deleteFeedPost } from '../api/FeedPostData';
import { User } from '../model/User/User';


export interface Props {
    feedPosts: FeedPost[]
    currentUser: User;
    handleDelete: (id: number) => void;
    getFeedPosts: typeof getFeedPosts
}

export interface State {

}



class FeedPostContainer extends React.Component<Props, State> {

    private handleDelete = async (id: number) => {
        await deleteFeedPost(id);
        this.props.getFeedPosts();
    }

    componentDidMount() {
        this.props.getFeedPosts();
    }

    render() {
        return (
            <div className="center">
                {this.props.feedPosts.map(f => (
                    <FeedPostView key={f.id}
                        currentUser={this.props.currentUser}
                        onDeleteClicked={this.handleDelete}
                        feedPost={f}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        feedPosts: store.feedPosts.feedPosts,
        currentUser: store.users.currentUser
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getFeedPosts: () => dispatch(getFeedPosts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPostContainer)
