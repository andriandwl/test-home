import { ActionType } from "./action";

function beersReducer(beers = [], action) {
  switch (action.type) {
    case ActionType.RECEIVE_BEERS:
      return [action.payload.beers];
    default:
      return beers;
  }
}

export default beersReducer;
