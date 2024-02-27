import { SET_NEXT_PATH } from '../actions/navigationActions';
import { SET_ORIGIN_PATH } from '../actions/navigationActions';



const initialState = {
  fromDeck: false,
  nextPath: null,
  originPath: '', // Add this line
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAVIGATION_FROM_DECK':
      return {
        ...state,
        fromDeck: action.payload,
      };
    case SET_NEXT_PATH:
      return {
        ...state,
        nextPath: action.payload,
      };
      case SET_ORIGIN_PATH:
      return {
          ...state,
          originPath: action.payload,
      };
    // handle other actions
    default:
      return state;
  }

  
};

export default navigationReducer;
