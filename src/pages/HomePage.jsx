import SearchBarComponent from "../components/SearchBarComponent";
import SearchFieldsComponent from "../components/SearchFieldsComponent";
import SortFieldsComponent from "../components/SortFieldsComponent";
import { useSelector } from "react-redux";
import { selectFontAwesomeSvgs } from "../store/app-data/app-data.selctor";
import SideBarComponent from "../components/SideBarComponent";
import PaginationComponent from "../components/PaginationComponent";
import { NoMatchFoundComponent } from "../components/NoMatchFoundComponent.jsx";

const HomePage = () => {
  const fontAwesomeSvgs = useSelector(selectFontAwesomeSvgs);

  return (
    <>
      <header>
        <section id="search-header" className="flex-center flex-col gap-10">
          <SearchBarComponent />
          <div className="mb-4 flex gap-24">
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
