import {connect} from "react-redux";
import {pause_action, reset_action} from './reducers/Reducer';
import {Clock} from './Clock.js'
import {Button, ButtonGroup} from './components/Button.js';
import {RoundTracker} from './RoundTracker';
import {Options} from "./Options";
import { Colors } from "./Colors";
import { Frame } from "./Frame";


function PanelRenderer({dispatch, pause}) {
    return <Frame>
        <Clock/>
        <RoundTracker/>
        <ButtonGroup>
            <Button
                className={pause ? "restart-button" : "pause-button"}
                text={pause ? "Start" : "Stop"}
                onClick={() => dispatch(pause_action())}/>
            <Button
                className="reset-button"
                text="Reset"
                onClick={() => dispatch(reset_action())}/>
        </ButtonGroup>
        <br/>
        <Colors/>
        <Options/>
    </Frame>;
}


const toProps = (state, props) => {
    return {
        pause: state.pause,
        ...props,
    };
}


export const Panel = connect(toProps)(PanelRenderer);
