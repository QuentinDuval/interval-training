import {connect} from "react-redux";
import {pause_action, restart_action, set_nb_rounds, set_round_duration, set_round_rest} from './reducers/Reducer';
import {Clock} from './Clock.js'
import {Button} from './components/Button.js';
import {IntegerInputField} from './components/InputField';
import {RoundTracker} from './RoundTracker';


function PanelRenderer({dispatch, total_rounds, round_duration, round_rest}) {
    return <div>
        <Clock/>
        <RoundTracker/>
        <Button
            text="Pause"
            onClick={() => dispatch(pause_action())}/>
        <br/>

        <Button
            text="Restart"
            onClick={() => dispatch(restart_action())}/>
        <br/>
        
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
    </div>;
}


const toProps = (state, props) => {
    return {
        total_rounds: state.total_rounds,
        round_duration: state.round_duration,
        round_rest: state.round_rest,
        ...props,
    };
}



export const Panel = connect(toProps)(PanelRenderer);
