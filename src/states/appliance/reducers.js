import { ActionType } from "./action";

function applianceReducer(appliance = [], action) {
  switch (action.type) {
    case ActionType.RECEIVE_APPLIANCE:
      return action.payload.appliance;
    default:
      return appliance;
  }
}

export default applianceReducer;
