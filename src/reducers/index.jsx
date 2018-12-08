import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import pokemon from "./pokemon";

export default combineReducers({
    visibilityFilter,
    pokemon
})