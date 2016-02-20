/**
 * Created by wmj on 2016/2/20.
 */
import {combineReducers} from 'redux';

import {SELECT,REQUEST,RESPONSE} from 'constant/action_types';

import 'babel-polyfill';
function selectedChannel(state = "frontend", action) {

    switch (action.type) {
        case SELECT:
            return action.channel;
        default :
            return state;
    }

}


function news(state = {
    isFetching: false,
    items: []
}, action) {


    switch (action.type){

        case REQUEST:

            return Object.assign({},state,{isFetching:true});

        case RESPONSE:
            return Object.assign({},state,{isFetching:false,items:action.items,lastUpdated:action.receiveAt});
        default :
            return state;
    }

}

const newsReducer=combineReducers({
   selectedChannel,
    news
});
export default newsReducer;