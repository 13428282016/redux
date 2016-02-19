/**
 * Created by wmj on 2016/2/1.
 */



import  *  as types from 'constant/action_types';
import  {combineReducers} from 'redux';
import 'es6-shim';


function todos(state = [], action) {


    switch (action.type) {
        case  types.ADD:
            return [...state, {text: action.text, status: 'progress'}];
        case types.DELETE:
            var copy = state.slice();
            copy.splice(action.index, 1);
            return copy;
        case types.COMPLETE:
            var copy=state.slice();
            copy[action.id].status="COMPLETED";
            return copy;

        default :
            return state;

    }


}

var initFilters = {

    visibility: 'SHOW_ALL'

};
function filters(state = initFilters, action) {

    switch (action.type) {
        case types.FILTER:
            if (typeof action.conditions == 'undefined') {
                return state;
            }
            if (action.conditions === null) {
                return initFilters;
            }
            return Object.assign({}, state, action.conditions);
        default :
            return state;
    }


}


const todoApp = combineReducers({

    todos,
    filters
});

export default todoApp;

