import {connect} from "react-redux";


function RoundTrackerR({seconds, duration, total}) {
    let current = Math.floor(seconds / duration);
    return <div className="round-tracker">
        <span>{Math.min(current, total)}</span>
        <span> / </span>
        <span>{total}</span>
    </div>;
}


const toProps = (state, props) => {
    return {
        seconds: state.total_seconds,
        duration: state.round_duration + state.round_rest,
        total: state.total_rounds,
        ...props,
    };
}


export const RoundTracker = connect(toProps)(RoundTrackerR);
