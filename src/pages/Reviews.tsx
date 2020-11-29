import * as React from 'react';
import { ReviewViewModel } from '../model/Review/ReviewViewModel';
import { getReviews } from '../redux/Reviews/ReviewActions';
import ReviewsContainer from '../containers/ReviewContainer';
import { connect } from 'react-redux';
import { ApplicationState } from '../redux/Store';
import { Label, Row } from 'reactstrap';

export interface Props {
    reviews: ReviewViewModel[]
    getReviews: typeof getReviews
}

export interface State {

}

class Reviews extends React.Component<Props, State> {

    componentDidMount() {
        this.props.getReviews();
    }

    render() {
        return (
            <div>
                <Row className="justify-content-center">
                    <Label className="h2"> Reviews </Label>
                </Row>
                <ReviewsContainer reviews={this.props.reviews}
                />
            </div>
        );
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        reviews: store.reviews.reviews
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
)(Reviews);

//export default Reviews;