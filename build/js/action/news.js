/**
 * Created by wmj on 2016/2/20.
 */
import  {SELECT,REQUEST,RESPONSE}   from 'constant/action_types';
import 'babel-polyfill';
import  fetch from 'isomorphic-fetch';
export function selectChannel(channel) {

    return {
        type: SELECT,
        channel
    }
}


export function request(channel) {

    return {
        type: REQUEST,
        channel
    }
}

export function response(channel, json) {

    return {
        type: RESPONSE,
        channel,
        items: json.data.items,
        responseAt: Date.now()
    }
}


export function fetchData(channel) {

    return function (dispatch) {


        dispatch(request(channel));
        return fetch('http://dev.com:8080/data/'+channel+'.json').
            then(response=>response.json())
            .then(json=>
            dispatch(response('channel',json))
        )


    }

}