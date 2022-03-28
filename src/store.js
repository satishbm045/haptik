import {createStore, combineReducers} from 'redux';
import {friendsListDataReducer} from './redux/reducer/friendsListDataReducer';

const rootReducer = combineReducers({
	friendsListDataReducer
})

const store = createStore(rootReducer)

export default store;