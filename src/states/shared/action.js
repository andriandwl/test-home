import axios from "axios";
import { receiveAddressActionCreator } from "../address/action";
import { receiveBanksActionCreator } from "../banks/action";
import { receiveApplianceActionCreator } from "../appliance/action";
import { receiveBeersActionCreator } from "../beers/action";

function asyncAddressMidle() {
  return async (dispatch) => {
    try {
      await axios
        .get("https://random-data-api.com/api/v2/addresses")
        .then((response) => {
          const address = response.data;
          dispatch(receiveAddressActionCreator(address));
        });
    } catch (err) {
      alert(err.message);
    }
  };
}

function asyncBankMidle() {
  return async (dispatch) => {
    try {
      await axios
        .get("https://random-data-api.com/api/v2/banks")
        .then((response) => {
          const banks = response.data;
          dispatch(receiveBanksActionCreator(banks));

          const json = JSON.stringify(banks);
          localStorage.setItem("banks", json);
        });
    } catch (err) {
      alert(err.message);
    }
  };
}

function asyncApplianceMidle() {
  return async (dispatch) => {
    try {
      await axios
        .get(
          "https://random-data-api.com/api/v2/appliances?size=12&is_xml=true"
        )
        .then((response) => {
          const appliance = response.data;
          dispatch(receiveApplianceActionCreator(appliance));
        });
    } catch (err) {
      alert(err.message);
    }
  };
}

function asyncBeersMidle() {
  return async (dispatch) => {
    try {
      await axios
        .get("https://random-data-api.com/api/v2/beers")
        .then((response) => {
          const beers = response.data;
          dispatch(receiveBeersActionCreator(beers));
        });
    } catch (err) {
      alert(err.message);
    }
  };
}

export {
  asyncAddressMidle,
  asyncBankMidle,
  asyncApplianceMidle,
  asyncBeersMidle,
};
