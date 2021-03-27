import {connect} from "react-redux";
import {new_background_exercise, new_background_rest} from './reducers/Reducer';
import {ColorSelector} from './ColorSelector';


function ColorsRenderer({dispatch, background_exercise, background_rest}) {
    return <div>
        <ColorSelector
            color={background_exercise}
            onChange={(color) => dispatch(new_background_exercise(color))}
        />
        <ColorSelector
            color={background_rest}
            onChange={(color) => dispatch(new_background_rest(color))}
        />
    </div>;
}


const toProps = (state, props) => {
    return {
        background_exercise: state.background_exercise,
        background_rest: state.background_rest,
        ...props,
    };
}


export const Colors = connect(toProps)(ColorsRenderer);
