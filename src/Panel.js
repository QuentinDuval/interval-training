import {connect} from "react-redux";
import {pause_action} from './reducers/Reducer';
import {Clock} from './Clock.js'
import {Button} from './components/Button.js';


function PanelRenderer({dispatch}) {
    console.log(dispatch);
    return <div>
        <Clock/>
        <Button text="Pause" onClick={() => dispatch(pause_action())}/>
    </div>;
}


export const Panel = connect()(PanelRenderer);
