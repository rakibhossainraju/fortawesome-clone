import { DYNAMIC_LAYOUT_ACTION_TYPES } from "./dynamic-layout.types.js";

const INITIAL_STATE = {
  dynamicGrids: {
    roomy: false,
    compact: false,
    cheatsheet: false,
  },
};

export const dynamicLayoutReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case DYNAMIC_LAYOUT_ACTION_TYPES.CHANGE_LAYOUT_TO_ROOMY:
      return {
        ...state,
        dynamicGrids: { ...INITIAL_STATE.dynamicGrids, roomy: true },
      };
    case DYNAMIC_LAYOUT_ACTION_TYPES.CHANGE_LAYOUT_TO_COMPACT:
      return {
        ...state,
        dynamicGrids: { ...INITIAL_STATE.dynamicGrids, compact: true },
      };
    case DYNAMIC_LAYOUT_ACTION_TYPES.CHANGE_LAYOUT_TO_CHEATSHEET:
      return {
        ...state,
        dynamicGrids: { ...INITIAL_STATE.dynamicGrids, cheatsheet: true },
      };
    default:
      return state;
  }
};
