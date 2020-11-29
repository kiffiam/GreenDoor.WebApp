import * as React from 'react';
import { ReservationDetailedModel } from "../model/Reservation/ReservationDetailedModel";
import { connect } from "react-redux";
import { ApplicationState } from "../redux/Store";
import { ReservationActions } from "../redux/Reservations/ReservationActionTypes"
import ReservationDetailedRow from "../components/ReservationComponents/ReservationDetailedRow";
import { ReservationActionTypes } from '../redux/Reservations/ReservationActionTypes';
import { Action, ActionCreator, ActionFromReducer, bindActionCreators } from 'redux';
import { unBookReservations } from '../api/ReservationData';
import { User } from '../model/User/User';

export interface Props {
    userReservations: ReservationDetailedModel[];
    currentUser: User;
    onUnBookClick: (id: number) => void;
    onDeleteClicked: (id: number) => void;
}

export interface State {

}

class UserReservationsContainer extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.userReservations.map(res => (
                    <ReservationDetailedRow key={res.id}
                        reservation={res}
                        currentUser={this.props.currentUser}
                        onUnBookClicked={this.props.onUnBookClick}
                        onDeleteClicked={this.props.onDeleteClicked}
                    />
                ))}
            </div>
        );
    }
}



export default UserReservationsContainer;