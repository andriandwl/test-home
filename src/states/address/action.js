const ActionType = {
  RECEIVE_ADDRESS: "RECEIVE_ADDRESS",
};

function receiveAddressActionCreator(address) {
  return {
    type: ActionType.RECEIVE_ADDRESS,
    payload: {
      address,
    },
  };
}

export { ActionType, receiveAddressActionCreator };
