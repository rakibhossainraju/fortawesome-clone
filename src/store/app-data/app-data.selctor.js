export const selectAppDataObj = ({ appData }) => appData.appData;

export const selectFontAwesomeSvgs = ({ appData }) => appData.fontAwesomeSvgs;

export const selectFontAwesomeCategories = ({ appData }) =>
  appData.appData.categories;

export const selectFontAwesomeSponsors = ({ appData }) =>
  appData.appData.sponsors;

export const selectFilters = ({ appData }) => appData.filters;
