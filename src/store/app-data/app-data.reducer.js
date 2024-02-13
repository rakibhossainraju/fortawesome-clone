import FONT_AWESOME_DB from "../../database/index-db.json";
import { APP_DATA_ACTION_TYPES } from "./app-data.types";

const INITIAL_STATE = {
  appData: { ...FONT_AWESOME_DB },
  fontAwesomeSvgs: FONT_AWESOME_DB.svgs,
  filters: {
    licenses: [],
    categories: [],
    features: [],
    styles: [],
  },
};

export const appDataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    //Search
    case APP_DATA_ACTION_TYPES.SEARCH_BY_NAME:
      return {
        ...state,
        fontAwesomeSvgs: [
          ...state.appData.svgs.filter(
            ({ svgName, searchTerms }) =>
              //Query with the name
              svgName.includes(payload.trim().toLowerCase()) ||
              searchTerms.some((name) =>
                name.includes(payload.trim().toLowerCase()),
              ),
          ),
        ],
      };
    //Sort Cases
    case APP_DATA_ACTION_TYPES.SORT_BY_FEATURE:
      return { ...state, fontAwesomeSvgs: [...state.appData.svgs] };
    case APP_DATA_ACTION_TYPES.SORT_BY_ALPHABET:
      return {
        ...state,
        fontAwesomeSvgs: [
          ...state.fontAwesomeSvgs.sort((a, b) => {
            const nameA = a.svgName.toLowerCase();
            const nameB = b.svgName.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          }),
        ],
      };
    case APP_DATA_ACTION_TYPES.SORT_BY_RELEASE:
      return {
        ...state,
        fontAwesomeSvgs: [
          ...state.fontAwesomeSvgs.sort((a, b) => {
            const newA = a.lastModified;
            const newB = b.lastModified;
            if (newA < newB) return 1;
            if (newA > newB) return -1;
            return 0;
          }),
        ],
      };
    //Add to Filters
    case APP_DATA_ACTION_TYPES.ADD_TO_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.filterName]: [
            ...(state.filters[payload.filterName].includes(payload.filterValue)
              ? state.filters[payload.filterName].filter(
                  (license) => license !== payload.filterValue,
                )
              : [...state.filters[payload.filterName], payload.filterValue]),
          ],
        },
      };
    //Reset Filters
    case APP_DATA_ACTION_TYPES.RESET_FILTER:
      return {
        ...state,
        fontAwesomeSvgs: [...state.appData.svgs],
        filters: {
          licenses: [],
          categories: [],
          features: [],
          styles: [],
        },
      };
    // FIlters
    case APP_DATA_ACTION_TYPES.FILTER_BY_LICENSES:
      console.log(payload);
      return {
        ...state,
        fontAwesomeSvgs: [
          ...(state.filters.licenses.length > 0
            ? state.appData.svgs.filter((svg) => {
                for (const license of state.filters.licenses)
                  if (svg[license]) return true;
                return false;
              })
            : state.appData.svgs),
        ],
      };
    case APP_DATA_ACTION_TYPES.FILTER_BY_CATEGORIES:
      return {
        ...state,
        fontAwesomeSvgs: [
          ...(state.filters.categories.length > 0
            ? state.appData.svgs.filter((svg) => {
                for (const categoryName of state.filters.categories) {
                  const category = state.appData.categories[categoryName];
                  if (category.icons.includes(svg.svgName)) return true;
                }
                return false;
              })
            : state.appData.svgs),
        ],
      };
    case APP_DATA_ACTION_TYPES.FILTER_BY_FEATURES:
      return {
        ...state,
        fontAwesomeSvgs: [
          ...(state.filters.features.length > 0
            ? state.appData.svgs.filter((svg) => {
                for (const featureName of state.filters.features) {
                  if (featureName === "new")
                    if (svg.changes.some((version) => version.startsWith("6")))
                      return true;
                  if (featureName === "sponsors")
                    if (state.appData.sponsors[svg.svgName]) return true;
                  if (featureName === "favorite") if (svg.favorite) return true;
                }
                return false;
              })
            : state.appData.svgs),
        ],
      };
    case APP_DATA_ACTION_TYPES.FILTER_BY_STYLES:
      return {
        ...state,
        fontAwesomeSvgs: [
          ...(state.filters.styles.length > 0
            ? state.appData.svgs.filter((svg) => {
                for (const styleName of state.filters.styles) {
                  if (styleName === "solid" && svg.familyStyle === "solid")
                    return true;
                  if (styleName === "brands" && svg.familyStyle === "brands")
                    return true;
                  if (styleName === "regular" && svg.familyStyle === "regular")
                    return true;
                }
                return false;
              })
            : state.appData.svgs),
        ],
      };
    default:
      return state;
  }
};
