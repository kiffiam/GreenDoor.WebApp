import * as React from 'react';
import ReviewComponent from "../components/ReviewComponents/ReviewComponent";
import { ReviewViewModel } from '../model/Review/ReviewViewModel';
import { Container } from 'reactstrap';


export interface Props {
    reviews: ReviewViewModel[];
}

export interface State {

}

class ReviewContainer extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
    }

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

export default ReviewContainer