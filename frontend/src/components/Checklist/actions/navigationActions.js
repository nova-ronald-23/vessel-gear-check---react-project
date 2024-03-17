export const SET_NEXT_PATH = 'SET_NEXT_PATH';

export const SET_ORIGIN_PATH = 'SET_ORIGIN_PATH';

export const setNavigationFromDeck = (fromDeck) => ({
  type: 'SET_NAVIGATION_FROM_DECK',
  payload: fromDeck,
});

export const setNextPath = (nextPath) => ({
  type: SET_NEXT_PATH,
  payload: nextPath,
});

export const setOriginPath = (path) => ({
  type: SET_ORIGIN_PATH,
  payload: path,
});



