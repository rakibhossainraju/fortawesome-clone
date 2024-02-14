import SearchBarComponent from "../components/SearchBarComponent";
import SearchFieldsComponent from "../components/SearchFieldsComponent";
import SortFieldsComponent from "../components/SortFieldsComponent";
import { useSelector, useDispatch } from "react-redux";
import { selectFontAwesomeSvgs } from "../store/app-data/app-data.selctor";
import SideBarComponent from "../components/SideBarComponent";
import PaginationComponent from "../components/PaginationComponent";
import { NoMatchFoundComponent } from "../components/NoMatchFoundComponent.jsx";

const HomePage = () => {
  const fontAwesomeSvgs = useSelector(selectFontAwesomeSvgs);
  const filters = useSelector(({ appData }) => appData.filters);
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <section id="search-header" className="mx-auto max-w-[50rem]">
          <h1 className="font-ceraroundpros text-6xl ">I am home page</h1>
          <SearchBarComponent />
          <h4>{JSON.stringify(filters)}</h4>
          <div className="flex">
            <SearchFieldsComponent />
            <SortFieldsComponent />
          </div>
        </section>
      </header>
      <main className="bg-slate-100">
        <div className="mx-auto flex w-[90%] justify-center">
          <section className="w-[28%]">
            {fontAwesomeSvgs.length > 0 && <SideBarComponent />}
          </section>
          {fontAwesomeSvgs.length === 0 ? (
            <NoMatchFoundComponent />
          ) : (
            <section className="bg-rose-8300 max-w-[72%]">
              <PaginationComponent fontAwesomeSvgs={fontAwesomeSvgs} />
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
