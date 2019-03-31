import { combineReducers } from 'redux';
import typeFilter from './typeFilter';
import generationFilter from './generationFilter';
import gameFilter from './gameFilter';
import pokemon from "./pokemon";

export default combineReducers({
    typeFilter,
    generationFilter,
    gameFilter,
    pokemon
})
