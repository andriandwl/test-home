const ActionType = {
  RECEIVE_APPLIANCE: "RECEIVE_APPLIANCE",
};

function receiveApplianceActionCreator(appliance) {
  return {
    type: ActionType.RECEIVE_APPLIANCE,
    payload: {
      appliance,
    },
  };
}

export { ActionType, receiveApplianceActionCreator };
