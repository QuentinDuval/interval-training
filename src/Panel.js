import {connect} from "react-redux";
import {pause_action, reset_action, new_background_color} from './reducers/Reducer';
import {Clock} from './Clock.js'
import {Button, ButtonGroup} from './components/Button.js';
import {RoundTracker} from './RoundTracker';
import {Options} from "./Options";
import {ColorSelector} from "./ColorSelector";


function PanelRenderer({dispatch, pause, background}) {
    return <div>
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
        <ColorSelector
            color={background}
            onChange={(color) => dispatch(new_background_color(color))}
        />
        <Options/>
    </div>;
}


const toProps = (state, props) => {
    return {
        pause: state.pause,
        background: state.background,
        ...props,
    };
}


export const Panel = connect(toProps)(PanelRenderer);
