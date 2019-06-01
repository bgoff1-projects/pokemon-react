import { combineReducers } from 'redux';
import typeFilter from './typeFilter';
import generationFilter from './generationFilter';
import gameFilter from './gameFilter';
import pokemon from "./pokemon";
import savedParties from './savedParties';

export default combineReducers({
    typeFilter,
    generationFilter,
    gameFilter,
    pokemon,
    savedParties
})
