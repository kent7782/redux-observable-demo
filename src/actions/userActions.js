export function fetchUser(username) {
  return { type: 'FETCH_USER', payload: username };
};

export function cancelFetchUser(payload) {
  return { type: 'FETCH_USER_CANCELLED', payload: payload };
};

export function fetchUserFulfilled(payload) {
    return { type: 'FETCH_USER_FULFILLED', payload };
};
