import store from ".";
import { _setCurrentAcount } from "./auth";

export const setCurrentAcount = data => store.dispatch(_setCurrentAcount(data))