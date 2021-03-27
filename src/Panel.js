import {connect} from "react-redux";
import {pause_action, restart_action} from './reducers/Reducer';
import {Clock} from './Clock.js'
import {Button} from './components/Button.js';
import {RoundTracker} from './RoundTracker';
import { Options } from "./Options";


function PanelRenderer({dispatch}) {
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
        <Options/>
    </div>;
}


export const Panel = connect()(PanelRenderer);
