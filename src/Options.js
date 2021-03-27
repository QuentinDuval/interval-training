import {connect} from "react-redux";
import {set_nb_rounds, set_round_duration, set_round_rest} from './reducers/Reducer';
import {IntegerInputField} from './components/InputField';


export function OptionsRenderer({dispatch, total_rounds, round_duration, round_rest}) {
    return <div>
        <IntegerInputField
            title="rounds"
            value={total_rounds}
            onChange={(v) => dispatch(set_nb_rounds(v))}/>
        
        <IntegerInputField
            title="active"
            value={round_duration}
            onChange={(v) => dispatch(set_round_duration(v))}/>

        <IntegerInputField
            title="resting"
            value={round_rest}
            onChange={(v) => dispatch(set_round_rest(v))}/>
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