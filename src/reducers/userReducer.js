export default function reducer(state={
    users: [],
    fetching: false,
    fetched: false,
    canceled: false,
    error: null
  }, action) {

    switch (action.type) {
      case 'FETCH_USER': {
        return Object.assign({}, state, { fetching: true }, { users: [] });
      }

      case 'FETCH_USER_REJECTED': {
        return Object.assign({}, state, { fetching: false }, { error: action.payload });
      }

      case 'FETCH_USER_FULFILLED': {
        return Object.assign({},
          state,
          { fetching: false },
          { fetched: true },
          { users: action.payload });
      }

      case 'FETCH_USER_CANCELLED': {
        return Object.assign({},
          state,
          { fetching: false },
          { fetched: false },
          { canceled: true });
      }

      default:
        return state;
    }

    return state;
}
