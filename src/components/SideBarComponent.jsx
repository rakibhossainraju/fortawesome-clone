import { useSelector, useDispatch } from "react-redux";
import {
  selectAppDataObj,
  selectFilters,
  selectFontAwesomeCategories,
  selectFontAwesomeSponsors,
} from "../store/app-data/app-data.selctor";
import {
  addToFilter,
  filterByCategories,
  filterByFeatures,
  filterByStyles,
} from "../store/app-data/app-data.action";

const SideBarComponent = () => {
  const dispatch = useDispatch();
  const categories = Object.values(useSelector(selectFontAwesomeCategories));
  const sponsors = Object.keys(useSelector(selectFontAwesomeSponsors));
  const fontAwesomeSvgs = useSelector(selectAppDataObj).svgs;
  const {
    licenses,
    categories: categoriesFilters,
    features,
    styles,
  } = useSelector(selectFilters);

  const { favorite, newVersos, solidStyles, regularStyles, duotoneStyles } =
    useSelector(selectAppDataObj).svgs.reduce(
      (acc, carSvg) => {
        if (carSvg.favorite) acc.favorite = acc.favorite + 1;
        if (carSvg.changes.some((version) => version.startsWith("6")))
          acc.newVersos = acc.newVersos + 1;
        if (carSvg.familyStyle === "solid")
          acc.solidStyles = acc.solidStyles + 1;
        if (carSvg.familyStyle === "regular")
          acc.regularStyles = acc.regularStyles + 1;
        if (carSvg.familyStyle === "brands")
          acc.duotoneStyles = acc.duotoneStyles + 1;
        return acc;
      },
      {
        favorite: 0,
        newVersos: 0,
        regularStyles: 0,
        solidStyles: 0,
        duotoneStyles: 0,
      },
    );
  const handelCategoriesFilter = (filter) => {
    dispatch(
      addToFilter({
        filterName: "categories",
        filterValue: filter,
      }),
    );
    dispatch(filterByCategories());
  };

  const handelFeaturedFilter = (filter) => {
    dispatch(
      addToFilter({
        filterName: "features",
        filterValue: filter,
      }),
    );
    dispatch(filterByFeatures());
  };

  const handelStylesFilter = (filter) => {
    dispatch(
      addToFilter({
        filterName: "styles",
        filterValue: filter,
      }),
    );
    dispatch(filterByStyles());
  };
  return (
    <section className="my-7 px-6 text-slate-500">
      {/*STYLE*/}
      <div>
        <h4 className="mb-2 font-ceraroundpros text-sm font-bold">STYLE</h4>
        <ul className="mb-10 ml-3">
          <li
            onClick={() => handelStylesFilter("solid")}
            className={`group mb-1 flex  cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300 ${styles.includes("solid") && "bg-blue-500 text-white"}`}
          >
            <p className="flex items-center gap-4 text-[0.8rem]">
              <span
                className={`aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex  ${styles.includes("solid") ? "flex border-white bg-white text-blue-600" : "hidden text-slate-100"}`}
              >
                &#10003;
              </span>
              <svg
                className={`aspect-square w-3.5 fill-slate-500 group-hover:hidden ${styles.includes("solid") && "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,512,512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
              </svg>
              <span>Solid</span>
            </p>
            <p>{solidStyles}</p>
          </li>
          <li
            onClick={() => handelStylesFilter("regular")}
            className={`group mb-1 flex  cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300 ${styles.includes("regular") && "bg-blue-500 text-white"}`}
          >
            <p className="flex items-center gap-4 text-[0.8rem]">
              <span
                className={`aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex  ${styles.includes("regular") ? "flex border-white bg-white text-blue-600" : "hidden text-slate-100"}`}
              >
                &#10003;
              </span>
              <svg
                className={`aspect-square w-3.5 fill-slate-500 group-hover:hidden ${styles.includes("regular") && "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,512,512"
              >
                <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
              <span>Regular</span>
            </p>
            <p>{regularStyles}</p>
          </li>
          <li
            onClick={() => handelStylesFilter("brands")}
            className={`group mb-1 flex  cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300 ${styles.includes("brands") && "bg-blue-500 text-white"}`}
          >
            <p className="flex items-center gap-4 text-[0.8rem]">
              <span
                className={`aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex  ${styles.includes("brands") ? "flex border-white bg-white text-blue-600" : "hidden text-slate-100"}`}
              >
                &#10003;
              </span>
              <svg
                className={`aspect-square w-3.5 fill-slate-500 group-hover:hidden ${styles.includes("brands") && "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,512,512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
              </svg>
              <span>Duotone</span>
            </p>
            <p>{duotoneStyles}</p>
          </li>
          <li className="group mb-1 flex cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300">
            <p className="flex items-center gap-4 text-[0.8rem]">
              <span className="hidden aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex">
                &#10003;
              </span>
              <svg
                className="aspect-square w-3.5 fill-slate-500 group-hover:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,512,512"
              >
                <path d="M257 8C120 8 9 119 9 256s111 248 248 248 248-111 248-248S394 8 257 8zm-49.5 374.8L81.8 257.1l125.7-125.7 35.2 35.4-24.2 24.2-11.1-11.1-77.2 77.2 77.2 77.2 26.6-26.6-53.1-52.9 24.4-24.4 77.2 77.2-75 75.2zm99-2.2l-35.2-35.2 24.1-24.4 11.1 11.1 77.2-77.2-77.2-77.2-26.5 26.5 53.1 52.9-24.4 24.4-77.2-77.2 75-75L432.2 255 306.5 380.6z"></path>
              </svg>
              <span>Light</span>
            </p>
            <p>00</p>
          </li>
          <li className="group mb-1 flex cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300">
            <p className="flex items-center gap-4 text-[0.8rem]">
              <span className="hidden aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex">
                &#10003;
              </span>
              <svg
                className="aspect-square w-3.5 fill-slate-500 group-hover:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,496,512"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 177.5c-9.8 0-17.8 8-17.8 17.8v106.9c0 40.9-33.9 73.9-74.9 73.9-41.4 0-74.9-33.5-74.9-74.9v-46.5h57.3v45.8c0 10 8 17.8 17.8 17.8s17.8-7.9 17.8-17.8V200.1c0-40 34.2-72.1 74.7-72.1 40.7 0 74.7 32.3 74.7 72.6v23.7l-34.1 10.1-22.9-10.7v-20.6c.1-9.6-7.9-17.6-17.7-17.6zm167.6 123.6c0 41.4-33.5 74.9-74.9 74.9-41.2 0-74.9-33.2-74.9-74.2V263l22.9 10.7 34.1-10.1v47.1c0 9.8 8 17.6 17.8 17.6s17.8-7.9 17.8-17.6v-48h57.3c-.1 45.9-.1 46.4-.1 46.4z"></path>
              </svg>
              <span>Thin</span>
            </p>
            <p>00</p>
          </li>
        </ul>
      </div>

      {/*FEATURED*/}
      <div>
        <h4 className="mb-2 font-ceraroundpros text-sm font-bold">FEATURED</h4>
        <ul className="mb-10 ml-3">
          <li
            onClick={() => handelFeaturedFilter("new")}
            className={`group mb-1 flex  cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300 ${features.includes("new") && "bg-blue-500 text-white"}`}
          >
            <p className="flex items-center gap-4 text-[0.8rem]">
              <span
                className={`aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex  ${features.includes("new") ? "flex border-white bg-white text-blue-600" : "hidden text-slate-100"}`}
              >
                &#10003;
              </span>
              <svg
                className={`aspect-square w-3.5 fill-slate-500 group-hover:hidden ${features.includes("new") && "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,576,512"
              >
                <path d="M288 0c14.5 0 27.2 9.7 30.9 23.8l23.9 89.6 75.9-53.3c11.9-8.3 27.8-7.6 39 1.7s14.6 24.9 8.4 38.1l-39.3 84 92.4 8c14.4 1.2 26.2 12 28.8 26.3s-4.9 28.5-18 34.6l-84.1 39.1 65.7 65.5c10.3 10.2 12.4 26.1 5.1 38.7s-22 18.7-36 14.9L391 386.8l8.2 92.4c1.3 14.4-7.3 27.9-20.9 32.9s-28.9 .1-37.2-11.7l-53.1-76-53.1 76c-8.3 11.9-23.6 16.7-37.2 11.7s-22.2-18.5-20.9-32.9l8.2-92.4L95.4 410.9c-14 3.8-28.8-2.3-36-14.9s-5.2-28.4 5.1-38.7l65.7-65.5L46 252.7c-13.1-6.1-20.5-20.3-18-34.6s14.3-25.1 28.8-26.3l92.4-8-39.3-84c-6.1-13.1-2.7-28.8 8.4-38.1s27.1-10 39-1.7l75.9 53.3 23.9-89.6C260.8 9.7 273.5 0 288 0zm0 156.2l-4.8 18c-2.7 10.1-10.2 18.2-20 21.8s-20.8 2.1-29.3-3.9l-15.2-10.7 7.9 16.8c4.4 9.5 4 20.5-1.3 29.6s-14.5 15-25 15.9l-18.5 1.6 16.8 7.8c9.5 4.4 16.2 13.2 18 23.5s-1.5 20.8-8.9 28.2l-13.2 13.1 17.9-4.8c10.1-2.7 20.9-.3 28.9 6.4s12.2 16.9 11.3 27.3l-1.6 18.5 10.6-15.2c6-8.6 15.8-13.7 26.2-13.7s20.2 5.1 26.2 13.7l10.6 15.2-1.6-18.5c-.9-10.4 3.3-20.6 11.3-27.3s18.8-9.1 28.9-6.4l17.9 4.8-13.2-13.1c-7.4-7.4-10.7-17.9-8.9-28.2s8.5-19.1 18-23.5l16.8-7.8-18.5-1.6c-10.4-.9-19.7-6.8-25-15.9s-5.7-20.1-1.3-29.6l7.9-16.8-15.2 10.7c-8.6 6-19.5 7.5-29.3 3.9s-17.3-11.7-20-21.8l-4.8-18z"></path>
              </svg>
              <span>New In V6 </span>
            </p>
            <p>{newVersos}</p>
          </li>
          <li
            onClick={() => handelFeaturedFilter("sponsors")}
            className={`group mb-1 flex  cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300 ${features.includes("sponsors") && "bg-blue-500 text-white"}`}
          >
            <p className="flex items-center gap-4 text-[0.8rem]">
              <span
                className={`aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex  ${features.includes("sponsors") ? "flex border-white bg-white text-blue-600" : "hidden text-slate-100"}`}
              >
                &#10003;
              </span>
              <svg
                className={`aspect-square w-3.5 fill-slate-500 group-hover:hidden ${features.includes("sponsors") && "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,512,512"
              >
                <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"></path>
              </svg>
              <span>Sponsored</span>
            </p>
            <p>{sponsors.length}</p>
          </li>
          <li
            onClick={() => handelFeaturedFilter("favorite")}
            className={`group mb-1 flex  cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300 ${features.includes("favorite") && "bg-blue-500 text-white"}`}
          >
            <p className="flex items-center gap-4 text-[0.8rem]">
              <span
                className={`aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex  ${features.includes("favorite") ? "flex border-white bg-white text-blue-600" : "hidden text-slate-100"}`}
              >
                &#10003;
              </span>
              <svg
                className={`aspect-square w-3.5 fill-slate-500 group-hover:hidden ${features.includes("favorite") && "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,512,512"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
              </svg>
              <span>Staff Favorites</span>
            </p>
            <p>{favorite}</p>
          </li>
        </ul>
      </div>

      {/*CATEGORIES*/}
      <div>
        <h4 className="mb-2 font-ceraroundpros text-sm font-bold">
          CATEGORIES
        </h4>
        <ul className="mb-10 ml-1">
          {categories.map((category, index) => (
            <li
              key={"category" + category.category}
              onClick={() => handelCategoriesFilter(category.category)}
              className={`group mb-1 flex  cursor-pointer justify-between rounded-lg border border-transparent px-3 py-2 transition-all duration-100 hover:border-slate-300 ${categoriesFilters.includes(category.category) && "bg-blue-500 text-white"}`}
            >
              <p className="flex items-center gap-4 text-[0.8rem]">
                <span
                  className={`aspect-square w-3.5 items-center justify-center rounded-sm border-2 border-slate-400 text-[7px] group-hover:flex  ${categoriesFilters.includes(category.category) ? "flex border-white bg-white text-blue-600" : "hidden text-slate-100"}`}
                >
                  &#10003;
                </span>
                <svg
                  className={`aspect-square w-3.5 fill-slate-500 group-hover:hidden ${categoriesFilters.includes(category.category) && "hidden"}`}
                  viewBox={fontAwesomeSvgs[500 + index].svgProperties.viewBox}
                >
                  <path d={fontAwesomeSvgs[500 + index].svgProperties.path} />
                </svg>
                <span>{category.label}</span>
              </p>
              <p>{category.icons.length}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SideBarComponent;
