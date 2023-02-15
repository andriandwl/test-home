const ActionType = {
  RECEIVE_BANKS: "RECEIVE_BANKS",
};

function receiveBanksActionCreator(banks) {
  return {
    type: ActionType.RECEIVE_BANKS,
    payload: {
      banks,
    },
  };
}

export { ActionType, receiveBanksActionCreator };
