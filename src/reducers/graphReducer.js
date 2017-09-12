export default function reducer(state = { points: [], hull: [] }, action) {
  switch (action.type) {
    case 'GENERATE_POINTS':
      return Object.assign({}, state, { points: action.payload.points }, { hull: action.payload.hull }, { error: '' });

      case 'CALCULATE_CONVEX_HULL':
        return Object.assign({}, state, { hull: action.payload.hull }, { error: '' });

      case 'GENERATE_POINTS_FAILED':
        return Object.assign({}, state, { error: action.payload.error });

      case 'CALCULATE_CONVEX_HULL_FAILED':
        return Object.assign({}, state, { error: action.payload.error });

    default:
      return state;
  }
};
