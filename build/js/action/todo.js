/**
 * Created by wmj on 2016/2/1.
 */


import  * as types  from 'constant/action_types';

export function add(text) {

    return {type: types.ADD, text};
}
export function remove(index) {
    return {type: types.DELETE, index};
}
export  function filter(conditions){
    return {type:types.FILTER,conditions};
}

export function complete(id) {
    return {type: types.COMPLETE, id};
}
