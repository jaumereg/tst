import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './src/app/ducks/message/message.reducer';
import chartReducer from './src/app/ducks/chart/chart.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    messageReducer,
    chartReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store;