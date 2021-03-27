import {connect} from "react-redux";
import {new_background_exercise_1, new_background_exercise_2, new_background_rest} from './reducers/Reducer';
import {ColorSelector} from './ColorSelector';


function ColorsRenderer({dispatch, background_exercise_1, background_exercise_2, background_rest}) {
    return <div>
        <ColorSelector
            color={background_exercise_1}
            onChange={(color) => dispatch(new_background_exercise_1(color))}
        />
        <ColorSelector
            color={background_exercise_2}
            onChange={(color) => dispatch(new_background_exercise_2(color))}
        />
        <ColorSelector
            color={background_rest}
            onChange={(color) => dispatch(new_background_rest(color))}
        />
    </div>;
}


const toProps = (state, props) => {
    return {
        background_exercise_1: state.background_exercise_1,
        background_exercise_2: state.background_exercise_2,
        background_rest: state.background_rest,
        ...props,
    };
}


export const Colors = connect(toProps)(ColorsRenderer);
