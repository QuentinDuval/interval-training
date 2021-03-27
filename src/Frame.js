import {connect} from "react-redux";


function FrameRenderer({children, pause, total_seconds, round_duration, round_rest, background_exercise, background_rest}) {
    let color = "#f4f4f4";
    if (!pause) {
        const in_round_seconds = total_seconds % (round_duration + round_rest);
        if (in_round_seconds < round_duration) {
            color = background_exercise;
        } else {
            color = background_rest;
        }
    }
    return <div style={{backgroundColor: color}}>
        <header className="App-header">
            {children}
        </header>
    </div>;
}


const toProps = (state, props) => {
    return {
        total_seconds: state.total_seconds,
        round_duration: state.round_duration,
        round_rest: state.round_rest,
        pause: state.pause,
        background_exercise: state.background_exercise,
        background_rest: state.background_rest,
        ...props,
    };
}


export const Frame = connect(toProps)(FrameRenderer);
