import * as React from 'react';
import axios from "axios";

import ReviewComponent from "../components/ReviewComponents/ReviewComponent";
import { ReviewViewModel } from '../model/Review/ReviewViewModel';
import { getReviews } from '../redux/Reviews/ReviewActions';
import { connect } from 'react-redux';
import { ApplicationState } from "../redux/Store";
import { Container } from 'reactstrap';


export interface Props {
    reviews: ReviewViewModel[];
    //reviewsByRoom: ReviewViewModel[];
}

export interface State {

}

class ReviewContainer extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
    }


    /*componentDidMount() {
        this.props.getReviews();
    }*/

    render() {
        return (
            <Container className="justify-content-center">
                {this.props.reviews.map(rev => (
                    <ReviewComponent key={rev.id}
                        review={rev} />
                ))}
            </Container>
        );
    }
}


/*
const mapStateToProps = (store: ApplicationState) => {
    return {
        reviews: store.reviews.reviews,
        reviewsByRoom: store.reviews.reviewsByRoom
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getReviews: () => dispatch(getReviews())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewContainer);*/

export default ReviewContainer