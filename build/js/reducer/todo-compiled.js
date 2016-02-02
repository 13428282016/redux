/**
 * Created by wmj on 2016/2/1.
 */

import * as types from 'constant/action_types';
const initialState = {

    todos: []

};
export function todoApp(state = initialState, action) {

    switch (action.type) {
        case types.ADD_TODO:
            return Object.assign({}, state, { todos: [...state.todos, { text: action.text, completed: false }] });
        default:
            return state;
    }
}

//# sourceMappingURL=todo-compiled.js.map