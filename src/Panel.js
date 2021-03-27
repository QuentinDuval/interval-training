import {connect} from "react-redux";
import {pause_action, restart_action} from './reducers/Reducer';
import {Clock} from './Clock.js'
import {Button, ButtonGroup} from './components/Button.js';
import {RoundTracker} from './RoundTracker';
import {Options} from "./Options";


function PanelRenderer({dispatch}) {
    return <div>
        <Clock/>
        <RoundTracker/>
        <ButtonGroup>
            <Button
                text="Pause"
                onClick={() => dispatch(pause_action())}/>
            <Button
                text="Restart"
                onClick={() => dispatch(restart_action())}/>
        </ButtonGroup>
        <br/>
        <Options/>
    </div>;
}


export const Panel = connect()(PanelRenderer);
