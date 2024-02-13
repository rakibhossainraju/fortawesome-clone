import SearchBarComponent from "../components/SearchBarComponent";
import SearchFieldsComponent from "../components/SearchFieldsComponent";
import SortFieldsComponent from "../components/SortFieldsComponent";
import { useSelector, useDispatch } from "react-redux";
import { selectFontAwesomeSvgs } from "../store/app-data/app-data.selctor";
import { resetFilters } from "../store/app-data/app-data.action";
import SideBarComponent from "../components/SideBarComponent";
import PaginationComponent from "../components/PaginationComponent";

const HomePage = () => {
  const fontAwesomeSvgs = useSelector(selectFontAwesomeSvgs);
  const filters = useSelector(({ appData }) => appData.filters);
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <section id="search-header" className="mx-auto max-w-[50rem]">
          <h1>I am home page</h1>
          <SearchBarComponent />
          <h4>{JSON.stringify(filters)}</h4>
          <div className="flex">
            <SearchFieldsComponent />
            <SortFieldsComponent />
          </div>
        </section>
      </header>
      <main>
        <h1 className="text-6xl font-medium text-emerald-600">
          {fontAwesomeSvgs.length}
        </h1>
        <button
          className="text-6xl font-medium text-emerald-600"
          onClick={() => dispatch(resetFilters())}
        >
          Reset
        </button>
        <div className="flex gap-10">
          {/* Side Bar Section */}
          <div className="max-w-[30%]">
            <SideBarComponent />
          </div>
          {/* Main Content Section */}
          <div className="max-w-max-w-[70%] flex flex-wrap gap-5">
            <PaginationComponent fontAwesomeSvgs={fontAwesomeSvgs} />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
