import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import AddNoteReducer from '../Reducer/add-reducer'






let reducers = combineReducers({
       note:AddNoteReducer,
       form: formReducer

    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
