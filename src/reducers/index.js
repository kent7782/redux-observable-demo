import { combineReducers } from 'redux';

import thunder from './thunderReducer';
import user from './userReducer';
import graph from './graphReducer';

export default combineReducers({
  thunder,
  user,
  graph
})
