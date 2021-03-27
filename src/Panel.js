import {connect} from "react-redux";
import {pause_action} from './reducers/Reducer';
import {Clock, ClockTick} from './Clock.js'
import {Button} from './components/Button.js';


function PanelRenderer({dispatch}) {
    console.log(dispatch);
    return <div>
        <Clock/>
        <ClockTick/>
        <Button text="Pause" onClick={() => dispatch(pause_action())}/>
    </div>;
}


export const Panel = connect()(PanelRenderer);
