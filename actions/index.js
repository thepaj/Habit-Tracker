export const RECEIVE_HABITS = 'RECEIVE_HABITS';
export const ADD_HABIT = 'ADD_HABIT';

export function receiveHabits(habits) {
    return {
        type: RECEIVE_HABITS,
        habits
    }
}

export function addHabit(habit) {
    return {
        type: ADD_HABIT,
        habit
    }
}