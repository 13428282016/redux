/**
 * Created by wmj on 2016/1/30.
 */
//import {ADD_TODO,REMOVE_TODO} from 'constant/actionTypes
'use strict';

import todoStore from 'store/todo';
import * as actions from 'action/todo';
import TodoApp from 'component/todo_app.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

todoStore.subscribe(function () {

  console.log(todoStore.getState());
});
todoStore.dispatch(actions.add('first'));
todoStore.dispatch(actions.add('first'));
todoStore.dispatch(actions.add('first'));
todoStore.dispatch(actions.add('first'));
todoStore.dispatch(actions.add('first'));
todoStore.dispatch(actions.add('first'));
todoStore.dispatch(actions.add('first'));
todoStore.dispatch(actions.add('first'));
todoStore.dispatch(actions.remove(1));
todoStore.dispatch(actions.remove(1));
todoStore.dispatch(actions.remove(1));

todoStore.dispatch(actions.filter({ visibility: 'SHOW_PROGRESS' }));

ReactDOM.render();

//# sourceMappingURL=app-compiled.js.map