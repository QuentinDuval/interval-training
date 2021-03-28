import {connect} from "react-redux";
import {set_nb_rounds, set_round_duration, set_round_rest} from './reducers/Reducer';
import {IntegerInputField, TimeInputField} from './components/InputField';


export function OptionsRenderer({dispatch, total_rounds, round_duration, round_rest}) {
    return <div>
        <IntegerInputField
            title="rounds"
            value={total_rounds}
            onChange={(v) => dispatch(set_nb_rounds(v))}/>
        <TimeInputField
            title="active"
            value={round_duration}
            onChange={(v) => dispatch(set_round_duration(v))}/>
        <TimeInputField
            title="resting"
            value={round_rest}
            onChange={(v) => dispatch(set_round_rest(v))}/>
        <TimeInputField
            title="total time"
            value={(round_duration + round_rest) * total_rounds}
            readOnly/>
    </div>
}


const toProps = (state, props) => {
    return {
        total_rounds: state.total_rounds,
        round_duration: state.round_duration,
        round_rest: state.round_rest,
        ...props,
    };
}


export const Options = connect(toProps)(OptionsRenderer);
