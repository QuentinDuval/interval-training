export function initState() {
    return {
        pause: false,

        total_seconds: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,

        round_duration: 45,
        round_rest: 15,
        total_rounds: 9,
    }
}


export function pause_action() {
    return {type: 'PAUSE'};
}


export function reset_action() {
    return {type: 'RESET'};
}


export function increment_action() {
    return {type: 'INCREMENT'};
}


export function set_nb_rounds(new_val) {
    return {type: 'NB_ROUNDS', value: new_val};
}


export function set_round_duration(new_val) {
    return {type: 'ROUND_DUR', value: new_val};
}


export function set_round_rest(new_val) {
    return {type: 'ROUND_REST', value: new_val};
}


function add_one_second(state) {
    let new_state = {...state};
    new_state.seconds += 1;
    new_state.total_seconds += 1;
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


export function main_reducer(state, action) {
    if (state === undefined) {
        initState()
    }
    switch(action.type) {
        case "NB_ROUNDS":
            return {...state, total_rounds: action.value};
        case "ROUND_DUR":
            return {...state, round_duration: action.value};
        case "ROUND_REST":
            return {...state, round_rest: action.value};
        case 'PAUSE':
            return {...state, pause: !state.pause};
        case 'RESET':
            return {
                ...state,
                total_seconds: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        case 'INCREMENT':
            if (state.pause) {
                return state;
            } else {
                return add_one_second(state);
            }
        default:
            return state;
    }
}


export const reducer = main_reducer;
