/**
 * Created by wmj on 2016/1/30.
 */
//import {ADD_TODO,REMOVE_TODO} from 'constant/actionTypes
'use strict'
import store from 'store/todo';
import * as actions from 'action/todo';
import {render} from 'react-dom';
import React from 'react';

import  App from 'container/todo_app'
import {Provider} from 'react-redux';

//todoStore.subscribe(function () {
//
//    console.log(todoStore.getState());
//});
//todoStore.dispatch(actions.add('first'));
//todoStore.dispatch(actions.add('first'));
//todoStore.dispatch(actions.add('first'));
//todoStore.dispatch(actions.add('first'));
//todoStore.dispatch(actions.add('first'));
//todoStore.dispatch(actions.add('first'));
//todoStore.dispatch(actions.add('first'));
//todoStore.dispatch(actions.add('first'));
//todoStore.dispatch(actions.remove(1));
//todoStore.dispatch(actions.remove(1));
//todoStore.dispatch(actions.remove(1));
//
//todoStore.dispatch(actions.filter({visibility: 'SHOW_PROGRESS'}));


render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('test'));