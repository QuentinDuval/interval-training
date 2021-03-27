import {connect} from "react-redux";
import {increment_action} from './reducers/Reducer';
import React from 'react';


function pad_with_zeros(num, size) {
    let s = num + "";
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
}


class ClockTicker extends React.Component {
    componentDidMount() {
        this.interval = setInterval(() => this.props.dispatch(increment_action()), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div/>;
    }
}


function ClockRenderer({hours, minutes, seconds}) {
    return <div>
        <span>{pad_with_zeros(hours, 2)}</span>
        <span>:</span>
        <span>{pad_with_zeros(minutes, 2)}</span>
        <span>:</span>
        <span>{pad_with_zeros(seconds, 2)}</span>
    </div>;
}


const toProps = (state, props) => {
    return {
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
        ...props,
    };
}


export const Clock = connect(toProps)(ClockRenderer);
export const ClockTick = connect()(ClockTicker);
