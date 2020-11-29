import { Component } from "react";
import * as React from 'react';
import moment from "moment";

export interface Props {
    date: string;
}

class DateTimeFormatComponent extends React.Component<Props> {
    render() {
        return (
            <div>{moment(this.props.date).format("YYYY-MM-DD HH:mm")}</div>
        );
    }
}

export default DateTimeFormatComponent;