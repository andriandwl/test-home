import { ActionType } from "./action";

function addressReducer(address = [], action) {
  switch (action.type) {
    case ActionType.RECEIVE_ADDRESS:
      return [action.payload.address];
    default:
      return address;
  }
}

export default addressReducer;
