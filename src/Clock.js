import {connect} from "react-redux";
import {increment_action} from './reducers/Reducer';
import {pad_with_zeros, secondsToTime} from './utils/Time';
import React from 'react';


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
    return <div className="clock">
        <span>{pad_with_zeros(hours, 2)}</span>
        <span>:</span>
        <span>{pad_with_zeros(minutes, 2)}</span>
        <span>:</span>
        <span>{pad_with_zeros(seconds, 2)}</span>
    </div>;
}


const toProps = (state, props) => {
    const [h, m, s] = secondsToTime(state.total_seconds);
    return {
        hours: h,
        minutes: m,
        seconds: s,
        ...props,
    };
}


export const Clock = connect(toProps)(ClockRenderer);
export const ClockTick = connect()(ClockTicker);
