import { useDispatch, useSelector } from "react-redux";
import {
  changeLayoutToCheatsheet,
  changeLayoutToCompact,
  changeLayoutToRoomy,
} from "../store/dynamic-layout/dynamic-layout.action.js";
import { selectDynamicGrids } from "../store/dynamic-layout/dynamic-layout.selctor.js";
import {
  sorByAlphabet,
  sortByFeature,
  sortByRelease,
} from "../store/app-data/app-data.action.js";
import { debounce } from "../utils/debounce.utils.js";

const SortFieldsComponent = () => {
  const dispatch = useDispatch();
  const { roomy, compact, cheatsheet } = useSelector(selectDynamicGrids);

  const handelLayoutChange = (event) => {
    const { value } = event.currentTarget;
    value === "roomy" && dispatch(changeLayoutToRoomy());
    value === "compact" && dispatch(changeLayoutToCompact());
    value === "cheatsheet" && dispatch(changeLayoutToCheatsheet());
  };

  const handleSelectChange = debounce((event) => {
    const { value } = event.target;
    value === "featured" && dispatch(sortByFeature());
    value === "alphabetical" && dispatch(sorByAlphabet());
    value === "release" && dispatch(sortByRelease());
  }, 500);
  return (
    <section className="flex-center gap-3">
      <section className="flex-center gap-2">
        <button
          value="roomy"
          className={`group relative rounded-lg border-2 border-transparent p-3 hover:border-blue-500`}
          onClick={handelLayoutChange}
        >
          {sortFieldsHoverElements.hoverToolTip("Roomy")}
          {sortFieldsIcons.roomy(
            roomy || (!compact && !cheatsheet)
              ? "fill-blue-500"
              : "fill-blue-1000",
          )}
        </button>
        <button
          value="compact"
          className={`group relative rounded-lg border-2 border-transparent p-3 hover:border-blue-500`}
          onClick={handelLayoutChange}
        >
          {sortFieldsHoverElements.hoverToolTip("Compact")}
          {sortFieldsIcons.compact(
            compact ? "fill-blue-500" : "fill-blue-1000",
          )}
        </button>
        <button
          value="cheatsheet"
          className={`group relative rounded-lg border-2 border-transparent p-3 hover:border-blue-500`}
          onClick={handelLayoutChange}
        >
          {sortFieldsHoverElements.hoverToolTip("Cheatsheet")}
          {sortFieldsIcons.cheatsheet(
            cheatsheet ? "fill-blue-500" : "fill-blue-1000",
          )}
        </button>
      </section>
      <section className="flex-center gap-5">
        <div className="group relative">
          <div className="overflow-x-hidden rounded-xl border-2 border-gray-300 pr-4">
            <select
              className="py-3 pl-4 outline-none"
              onClick={handleSelectChange}
            >
              <option value="featured">Featured</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="release">Release</option>
            </select>
            {sortFieldsHoverElements.hoverToolTip(
              "Sort Icons",
              "w-32 text-center",
            )}
          </div>
        </div>
        <div className="group relative">
          <div className="group relative overflow-x-hidden rounded-xl border-2 border-gray-300 pr-4">
            <select className="py-3 pl-4 outline-none">
              <option value="featured">6.5.1</option>
              <option value="alphabetical">5.15.4</option>
              <option value="release">All Versions</option>
            </select>
          </div>
          {sortFieldsHoverElements.hoverToolTip(
            "Not Functional",
            "w-32 text-center",
          )}
        </div>
      </section>
    </section>
  );
};

export default SortFieldsComponent;

const sortFieldsHoverElements = {
  hoverToolTip: (label, styles) => (
    <span
      className={`absolute -top-12 left-1/2 -translate-x-1/2 scale-0 rounded bg-blue-1000 p-2 text-sm text-white transition-all duration-200 before:absolute before:bottom-0 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:translate-y-1/2 before:rotate-45 before:bg-blue-1000 before:content-[''] group-hover:scale-100 ${styles}`}
    >
      {label}
    </span>
  ),
};
const sortFieldsIcons = {
  roomy: (styles) => (
    <svg
      className={`aspect-square w-[1.5rem] transition-all duration-100 ease-[ease] ${styles}`}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="grid-2"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"></path>
    </svg>
  ),
  compact: (styles) => (
    <svg
      className={`aspect-square w-[1.5rem] transition-all duration-100 ease-[ease] ${styles}`}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="grid"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M0 72C0 49.9 17.9 32 40 32H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V72zM0 232c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V232zM128 392v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40zM160 72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V72zM288 232v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM160 392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392zM448 72v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM320 232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V232zM448 392v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40z"></path>
    </svg>
  ),
  cheatsheet: (styles) => (
    <svg
      className={`aspect-square w-[1.5rem] transition-all duration-100 ease-[ease] ${styles}`}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="list-ul"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"></path>
    </svg>
  ),
};
