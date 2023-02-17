import { createStore } from "redux"

// all constants 
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const INCREMENT_BY_ID = "INCREMENT_BY_ID"
const DECREMENT_BY_ID = "DECREMENT_BY_ID"


// initial state 
const counterState = {
    count: 0
}



// all action 
const incrementCounterActioon = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounterActioon = () => {
    return {
        type: DECREMENT_BY_ID,
        payload
    }
}

const increment_by_id_Action = (payload) => {
    return {
        type: INCREMENT_BY_ID,
        payload
    }
}
const decrement_by_id_Action = (payload) => {
    return {
        type: DECREMENT_BY_ID,
        payload
    }
}

// reducer create 
const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case INCREMENT_BY_ID:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT_BY_ID:
            return {
                ...state,
                count: state.count - action.payload
            }

        default:
            state;
    }
}


// create store 
const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})


// all dispatch 
// store.dispatch(incrementCounterActioon())
// store.dispatch(decrementCounterActioon())

store.dispatch(increment_by_id_Action(10))
store.dispatch(decrement_by_id_Action(5))