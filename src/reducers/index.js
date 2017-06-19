import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form'

import { reducer as notifs } from 'redux-notifications';
import browserNotifs from './notificationReducer';

const rootReducer = combineReducers({
  notifs,
  browserNotifs
});

export default rootReducer;
