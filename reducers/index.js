import { RECEIVE_HABITS, ADD_HABIT } from '../actions';

function habits(state = {}, action) {
    switch (action.type) {
        case RECEIVE_HABITS:
            return {
                ...state,
                ...action.habits
            }
        case ADD_HABIT:
            return {
                ...state,
                ...action.habit
            }
    }
}

export default habits;