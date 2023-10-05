import store from "..";
import { _setCurrentAcount } from ".";

export const setCurrentAcount = data => store.dispatch(_setCurrentAcount(data))