import { combineReducers } from 'redux';
import typeFilter from './typeFilter';
import generationFilter from './generationFilter';
import pokemon from "./pokemon";

export default combineReducers({
    typeFilter,
    generationFilter,
    pokemon
})