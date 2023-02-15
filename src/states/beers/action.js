const ActionType = {
  RECEIVE_BEERS: "RECEIVE_BEERS",
};

function receiveBeersActionCreator(beers) {
  return {
    type: ActionType.RECEIVE_BEERS,
    payload: {
      beers,
    },
  };
}

export { ActionType, receiveBeersActionCreator };
