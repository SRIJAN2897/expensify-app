import {createStore} from 'redux';


const incrementCount = ( {incrementBy = 1}={}) => {
    return{
        type: 'INCREMENT',
        incrementBy: incrementBy
    };
};

const decrementCount = ({decrementBy = 1} = {}) => {
    return{
        type : 'DECREMENT',
        decrementBy: decrementBy
    }
}
const setCount = ({count=0}={}) =>{
    return{
        type: ' SET',
        count: count
    }
}


const resetCount = () =>{
    return{
        type: 'RESET',
    }
}

const countReducer = (state = {count: 0}, action)=>{

    switch(action.type){     
           case 'INCREMENT':
               return {
                   count: state.count + action.incrementBy
               };
           case 'DECREMENT':
               return{
                   count: state.count - action.decrementBy
               };
           case 'SET':{
               return{
                   count: action.count
               }
           }
           case 'RESET':
               return{
                   count: 0
               };
           default: return state;
       }
};

const store = createStore(countReducer);

store.subscribe(()=>{     
    console.log(store.getState());
});

//action


store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementby: 10}));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({count: 50}));