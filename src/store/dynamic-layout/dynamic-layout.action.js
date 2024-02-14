import { DYNAMIC_LAYOUT_ACTION_TYPES } from "./dynamic-layout.types.js";
import createAction from "../../utils/reducer.utils.js";

export const changeLayoutToRoomy = () =>
  createAction(DYNAMIC_LAYOUT_ACTION_TYPES.CHANGE_LAYOUT_TO_ROOMY);
export const changeLayoutToCompact = () =>
  createAction(DYNAMIC_LAYOUT_ACTION_TYPES.CHANGE_LAYOUT_TO_COMPACT);
export const changeLayoutToCheatsheet = () =>
  createAction(DYNAMIC_LAYOUT_ACTION_TYPES.CHANGE_LAYOUT_TO_CHEATSHEET);
