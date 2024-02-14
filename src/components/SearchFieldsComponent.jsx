import { useDispatch, useSelector } from "react-redux";
import {
  addToFilter,
  filterByLicenses,
} from "../store/app-data/app-data.action";
import { selectFilters } from "../store/app-data/app-data.selctor.js";

const licenses = {
  classic: "classic",
  brands: "brand",
  sharp: "pro",
  free: "free",
};

function SearchFieldsComponent() {
  const dispatch = useDispatch();
  const { licenses: licensesFilter } = useSelector(selectFilters);
  const licenseFilteringHandler = (event) => {
    const key = event.currentTarget.value;

    dispatch(
      addToFilter({ filterName: "licenses", filterValue: licenses[key] }),
    );
    dispatch(filterByLicenses());
  };
  return (
    <section className="flex gap-4 ">
      <div
        className={`rounded-[5px] border-2 ${
          licensesFilter.includes("classic")
            ? "group border-blue-500"
            : "border-transparent"
        }`}
      >
        <button
          value="classic"
          className={`flex-center group h-28 w-32 flex-col gap-4 rounded-[4px] border-b-[5px] transition-all duration-100 hover:border-blue-400 ${licensesFilter.includes("classic") ? "border-blue-500 hover:border-blue-400" : "border-transparent "}`}
          onClick={licenseFilteringHandler}
        >
          {searchFieldsIcons.icons(
            licensesFilter.includes("classic")
              ? "fill-blue-500 group-hover:fill-blue-400"
              : "fill-blue-1000 group-hover:fill-blue-500 ",
          )}
          <span
            className={`font-ceraroundpros text-sm text-slate-800 group-hover:text-blue-500 ${licensesFilter.includes("classic") && "text-blue-500"}`}
          >
            Classic
          </span>
        </button>
      </div>
      <div
        className={`rounded-[5px] border-2 ${
          licensesFilter.includes("pro")
            ? "group border-blue-500"
            : "border-transparent"
        }`}
      >
        <button
          value="sharp"
          className={`flex-center group h-28 w-32 flex-col gap-4 rounded-[4px] border-b-[5px] transition-all duration-100 hover:border-blue-400 ${licensesFilter.includes("pro") ? "border-blue-500 hover:border-blue-400" : "border-transparent "}`}
          onClick={licenseFilteringHandler}
        >
          {searchFieldsIcons.icons(
            licensesFilter.includes("pro")
              ? "fill-blue-500 group-hover:fill-blue-400"
              : "fill-blue-1000 group-hover:fill-blue-500 ",
          )}
          <span className="font-ceraroundpros text-sm text-slate-800 group-hover:text-blue-500">
            Sharp
          </span>
        </button>
      </div>
      <div
        className={`rounded-[5px] border-2 ${
          licensesFilter.includes("brand")
            ? "group border-blue-500"
            : "border-transparent"
        }`}
      >
        <button
          value="brands"
          className={`flex-center group h-28 w-32 flex-col gap-4 rounded-[4px] border-b-[5px] transition-all duration-100 hover:border-blue-400 ${licensesFilter.includes("brand") ? "border-blue-500 hover:border-blue-400" : "border-transparent "}`}
          onClick={licenseFilteringHandler}
        >
          {searchFieldsIcons.brands(
            licensesFilter.includes("brand")
              ? "fill-blue-500 group-hover:fill-blue-400"
              : "fill-blue-1000 group-hover:fill-blue-500 ",
          )}
          <span className="font-ceraroundpros text-sm text-slate-800 group-hover:text-blue-500">
            Brands
          </span>
        </button>
      </div>
      <div
        className={`rounded-[5px] border-2 ${
          licensesFilter.includes("free")
            ? "group border-blue-500"
            : "border-transparent"
        }`}
      >
        <button
          value="free"
          className={`flex-center group h-28 w-32 flex-col gap-4 rounded-[4px] border-b-[5px] transition-all duration-100 hover:border-blue-400 ${licensesFilter.includes("free") ? "border-blue-500 hover:border-blue-400" : "border-transparent "}`}
          onClick={licenseFilteringHandler}
        >
          {searchFieldsIcons.free(
            licensesFilter.includes("free")
              ? "fill-blue-500 group-hover:fill-blue-400"
              : "fill-blue-1000 group-hover:fill-blue-500 ",
          )}
          <span className="font-ceraroundpros text-sm text-slate-800 group-hover:text-blue-500">
            Free
          </span>
        </button>
      </div>
    </section>
  );
}

export default SearchFieldsComponent;

const searchFieldsIcons = {
  icons: (styles) => (
    <svg
      className={`aspect-square w-[2.3rem] transition-all duration-100 ease-[ease] ${styles}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,512,512"
    >
      <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z"></path>
    </svg>
  ),
  brands: (styles) => (
    <svg
      className={`aspect-square w-[2.3rem] transition-all duration-100 ease-[ease] ${styles}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,448,512"
    >
      <path d="M448 48V384c-63.1 22.5-82.3 32-119.5 32c-62.8 0-86.6-32-149.3-32c-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2c62.7 0 86.5 32 149.3 32c20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3c-62.8 0-86.6-32-149.3-32c-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32V76.7c40.3-8 64.4-28.7 115.2-28.7c62.7 0 86.5 32 149.3 32c37.1 0 56.4-9.5 119.5-32z"></path>
    </svg>
  ),
  free: (styles) => (
    <svg
      className={`aspect-square w-[2.3rem] transition-all duration-100 ease-[ease] ${styles}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,448,512"
    >
      <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"></path>
    </svg>
  ),
};
