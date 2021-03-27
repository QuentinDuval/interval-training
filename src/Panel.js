import {connect} from "react-redux";
import {pause_action, set_nb_rounds} from './reducers/Reducer';
import {Clock} from './Clock.js'
import {Button} from './components/Button.js';
import {InputField} from './components/InputField';
import {RoundTracker} from './RoundTracker';


function PanelRenderer({dispatch, total_rounds}) {
    return <div>
        <Clock/>
        <RoundTracker/>
        <Button
            text="Pause"
            onClick={() => dispatch(pause_action())}/>
        <br/>
        
        <InputField
            title="#rounds"
            value={total_rounds}
            onChange={(e) => dispatch(set_nb_rounds(e.target.value))}/>
    </div>;
}


const toProps = (state, props) => {
    return {
        total_rounds: state.total_rounds,
        ...props,
    };
}



export const Panel = connect(toProps)(PanelRenderer);
