/**
 * Created by wmj on 2016/2/1.
 */

import * as types from 'constant/action_types';

export function addTodo(text) {

    return { type: types.ADD_TODO, text };
}
export function removeTodo(text) {
    return { type: types.REMOVE_TODO, text };
}

//# sourceMappingURL=todo-compiled.js.map