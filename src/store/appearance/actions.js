import store from "../";
import { _setFontSize, _setBackgroundColor , _setColor ,_setBoxShadow} from "./";

export const setBackgroundColor = ( data) => store.dispatch(_setBackgroundColor( data))
export const setFontSize = ( data) => store.dispatch(_setFontSize( data))
export const setColor = ( data) => store.dispatch(_setColor( data))
export const setBoxShadow = ( data) => store.dispatch(_setBoxShadow( data))