import { ActionType } from "./action";

function banksReducer(banks = [], action) {
  switch (action.type) {
    case ActionType.RECEIVE_BANKS:
      return [action.payload.banks];
    default:
      return banks;
  }
}

export default banksReducer;
