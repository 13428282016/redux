/**
 * Created by wmj on 2016/2/20.
 */


export default store=>next=>action=>{


    console.log('dispatch',action);
    let result=next(action);
    console.log('next state',store.getState());
    return result;



}