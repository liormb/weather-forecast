/**
 * User: liormb
 * Date: 2/13/16
 * Time: 10:00 PM
 */

'use strict';
 
import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
    weather: weatherReducer
});

export default rootReducer;
