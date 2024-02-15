import { useDispatch, useSelector } from "react-redux";
import { searchByName } from "../store/app-data/app-data.action";
import { debounce } from "../utils/debounce.utils";
import { useState } from "react";
import { selectAppDataObj } from "../store/app-data/app-data.selctor.js";
import { LoadingSpinner } from "./LoadingSpinner.jsx";

function SearchBarComponent() {
  const dispatch = useDispatch();
  const appData = useSelector(selectAppDataObj);
  const [isLoading, setIsLoading] = useState(false);
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const handelSearch = debounce(
    (query) => dispatch(searchByName(query)),
    600,
    setIsLoading,
  );
  return (
    <div className="w-[80%] py-5 text-center">
      <span className="relative inline-block w-10/12">
        <svg
          className="false false absolute left-6 top-1/2 aspect-square w-[18px] -translate-y-1/2 fill-blue-1000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0,0,512,512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
        </svg>
        <input
          className="w-full rounded-full border-2 border-blue-1000 p-4 pl-14 outline-4 outline-blue-400"
          type="text"
          onChange={({ currentTarget }) => {
            setSearchFieldValue(currentTarget.value);
            handelSearch(currentTarget.value);
          }}
          placeholder={`Search from ${appData.svgs.length} icons...`}
          autoComplete="off"
        />
        {!searchFieldValue.trim() && !isLoading ? (
          <span className="flex-center absolute right-8 top-1/2 -translate-y-1/2 gap-2 text-nowrap font-ceraroundpros text-gray-500">
            <span>Powered by </span>
            <svg
              className="w-[1rem] fill-slate-500"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="algolia"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 0C116.1 0 2 112.7 0 252.1C-2 393.6 112.9 510.8 254.5 511.6c43.7 .3 85.9-10.4 123.3-30.7c3.6-2 4.2-7 1.1-9.7l-24-21.2c-4.9-4.3-11.8-5.5-17.8-3c-26.1 11.1-54.5 16.8-83.7 16.4C139 461.9 46.5 366.8 48.3 252.4C50.1 139.5 142.6 48.2 256 48.2H463.7V417.2L345.9 312.5c-3.8-3.4-9.7-2.7-12.7 1.3c-18.9 25-49.7 40.6-83.9 38.2c-47.5-3.3-85.9-41.5-89.5-88.9c-4.2-56.6 40.6-103.9 96.3-103.9c50.4 0 91.9 38.8 96.2 88c.4 4.4 2.4 8.5 5.7 11.4l30.7 27.2c3.5 3.1 9 1.2 9.9-3.4c2.2-11.8 3-24.2 2.1-36.8c-4.9-72-63.3-130-135.4-134.4c-82.7-5.1-151.8 59.5-154 140.6c-2.1 78.9 62.6 147 141.6 148.7c33 .7 63.6-9.6 88.3-27.6L495 509.4c6.6 5.8 17 1.2 17-7.7V9.7c0-5.4-4.4-9.7-9.7-9.7H256z"></path>
            </svg>
            <span>Aligolia</span>
          </span>
        ) : (
          isLoading && (
            <div className="flex-center absolute right-16 top-1/2 -translate-y-1/2">
              <LoadingSpinner styles={"w-8"} />
            </div>
          )
        )}
      </span>
    </div>
  );
}

export default SearchBarComponent;
