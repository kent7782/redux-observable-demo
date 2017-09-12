import { combineEpics } from 'redux-observable';

import thunderEpic from './thunderEpic';
import flashEpic from './flashEpic';
import userEpic from './userEpic';

const rootEpic = combineEpics(
  thunderEpic,
  flashEpic,
  userEpic
);

export default rootEpic;
