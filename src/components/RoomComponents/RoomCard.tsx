import { RoomListModel } from "../../model/Room/RoomListModel";
import * as React from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Row } from "reactstrap";
import { withRouter } from "react-router-dom";

export interface Props {
  room: RoomListModel
  onDeleteClicked: (id: number) => void;
}

export interface State {

}

class RoomCard extends React.Component<Props, State> {

  private DetailsButton = withRouter(({ history }) => (
    <Button
      className="btn btn-md mb-1"
      color="primary"
      onClick={() => {
        history.push('/Rooms/' + this.props.room.id);
      }}
    >
      Details and Booking
    </Button>
  ))

  private ReviewButton = withRouter(({ history }) => (
    <Button
      className="btn btn-md mb-1"
      color="primary"
      onClick={() => {
        history.push('/Rooms/' + this.props.room.id + '/AddReview/');
      }}
    >
      Add a review
    </Button>
  ))


  render() {
    return (
      <div className="col-sm-4 col-md-3 col-lg-3">
        <Card className="m-2">
          <CardBody>
            <CardTitle className="h5">{this.props.room.name}</CardTitle>
            <CardText className="p mb-1">Time: {this.props.room.minTime} - {this.props.room.maxTime}</CardText>
            <CardText className="p mb-2">Difficulty: {this.props.room.difficulty}</CardText>
            <this.DetailsButton />
            <this.ReviewButton />
          </CardBody>
        </Card>
      </div >
    );
  }
}

export default RoomCard;