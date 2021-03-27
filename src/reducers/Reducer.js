export function initState() {
    return {
        pause: false,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }
}


export function pause_action() {
    return {type: 'PAUSE'};
}


export function increment_action() {
    return {type: 'INCREMENT'};
}


export function main_reducer(state, action) {
    if (state === undefined) {
        initState()
    }
    switch(action.type) {
        case 'PAUSE':
            let new_state = {...state};
            new_state.pause = !new_state.pause;
            return new_state;
        case 'INCREMENT':
            if (state.pause) {
                return state;
            } else {
                let new_state = {...state};
                new_state.seconds += 1;
                if (new_state.seconds >= 60) {
                    new_state.seconds = 0;
                    new_state.minutes += 1
                }
                if (new_state.minutes >= 60) {
                    new_state.minutes = 0;
                    new_state.hours += 1
                }
                return new_state;
            }
        default:
            return state;
    }
}


export const reducer = main_reducer;
