import {createStore} from 'redux';

// step 3 define reducers


// step 1 creat the store
const store = createStore(reducer);
store.subscribe(function() {
	console.log('current state is:'+store.getState());
});

// step 2 create and dispatch actions
store.dispatch({type: 'INCREMENT', payload: 1});
