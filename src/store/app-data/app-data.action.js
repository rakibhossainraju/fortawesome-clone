import createAction from "../../utils/reducer.utils";
import { APP_DATA_ACTION_TYPES } from "./app-data.types";

//Add Data
export const addData = (data) =>
  createAction(APP_DATA_ACTION_TYPES.ADD_DATA, data);

//Search action
export const searchByName = (query) =>
  createAction(APP_DATA_ACTION_TYPES.SEARCH_BY_NAME, query);

//Sort actions
export const sorByAlphabet = () =>
  createAction(APP_DATA_ACTION_TYPES.SORT_BY_ALPHABET);

export const sortByFeature = () =>
  createAction(APP_DATA_ACTION_TYPES.SORT_BY_FEATURE);

export const sortByRelease = () =>
  createAction(APP_DATA_ACTION_TYPES.SORT_BY_RELEASE);

//Filter Action
export const addToFilter = ({ filterName, filterValue }) =>
  createAction(APP_DATA_ACTION_TYPES.ADD_TO_FILTER, {
    filterName,
    filterValue,
  });

export const resetFilters = () =>
  createAction(APP_DATA_ACTION_TYPES.RESET_FILTER);

export const filterByLicenses = () =>
  createAction(APP_DATA_ACTION_TYPES.FILTER_BY_LICENSES);

export const filterByCategories = () =>
  createAction(APP_DATA_ACTION_TYPES.FILTER_BY_CATEGORIES);

export const filterByFeatures = () =>
  createAction(APP_DATA_ACTION_TYPES.FILTER_BY_FEATURES);

export const filterByStyles = () =>
  createAction(APP_DATA_ACTION_TYPES.FILTER_BY_STYLES);
