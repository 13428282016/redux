
import store from 'store/news';
import {selectChannel,fetchData} from 'action/news';


store.dispatch(selectChannel('tech'));
store.dispatch(fetchData('tech')).then(()=>console.log(store.getState()));
store.dispatch(selectChannel('frontend'));
store.dispatch(fetchData('frontend')).then(()=>console.log(store.getState()));

