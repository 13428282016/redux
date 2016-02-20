import reducer from 'reducer/news';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'middleware/logger'
const  createStoreWithMiddleware=applyMiddleware(
    thunkMiddleware,
    loggerMiddleware

)(createStore);
export  default createStoreWithMiddleware(reducer);