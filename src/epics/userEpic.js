import 'rxjs';
import { Observable } from 'rxjs/Observable';

import { fetchUserFulfilled } from '../actions/userActions';

const userEpic = action$ =>
  action$.ofType('FETCH_USER')
    .mergeMap(action =>
      Observable.timer(2300)
        .mergeMap(() =>
          Observable.ajax.getJSON('https://jsonplaceholder.typicode.com/users')
            .map(response => fetchUserFulfilled(response))
        )
        .takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
    );

export default userEpic;
