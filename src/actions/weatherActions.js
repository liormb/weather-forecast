/**
 * User: liormb
 * Date: 2/13/16
 * Time: 9:08 PM
 */

'use strict';

import axios from 'axios';
import Actions from '../models/Actions';
import API from '../models/API';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API.API_KEY}`;

const weatherActions = {

    fetchWeather(city) {
        const url = `${ROOT_URL}&q=${city},us`;
        const promise = axios.get(url);

        return {
            type: Actions.TYPE_FETCH_WEATHER,
            payload: promise
        }
    }
};

export default weatherActions;
