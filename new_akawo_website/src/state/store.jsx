import { createStore, combineReducers, applyMiddleware } from 'redux'
import {appReducer} from './allReducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    app : appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export {store}