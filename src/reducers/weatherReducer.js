/**
 * User: liormb
 * Date: 2/13/16
 * Time: 9:58 PM
 */

'use strict';

import Actions from '../models/Actions';
 
 export default function (state = [], action) {
     switch (action.type) {
         case Actions.TYPE_FETCH_WEATHER:
             return state.concat([ action.payload.data ]);
         default: return state;
     }
 }
