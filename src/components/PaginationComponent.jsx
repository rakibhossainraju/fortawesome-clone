import { useState } from "react";
import { IconsComponent } from "./IconsComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../store/app-data/app-data.selctor.js";
import {
  addToFilter,
  filterByCategories,
  filterByFeatures,
  filterByLicenses,
  filterByStyles,
  resetFilters,
} from "../store/app-data/app-data.action.js";

const PaginationComponent = ({ fontAwesomeSvgs = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 94;

  const { licenses, categories, features, styles } = useSelector(selectFilters);
  const dispatch = useDispatch();

  //Get current posts
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = fontAwesomeSvgs.slice(indexOfFirstCard, indexOfLastCard);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(fontAwesomeSvgs.length / cardsPerPage); i++)
    pageNumbers.push(i);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const licenseFilteringHandler = (value) => {
    dispatch(addToFilter({ filterName: "licenses", filterValue: value }));
    dispatch(filterByLicenses());
  };
  const featuresFilteringHandler = (value) => {
    dispatch(addToFilter({ filterName: "features", filterValue: value }));
    dispatch(filterByFeatures());
  };
  const categoriesFilteringHandler = (value) => {
    dispatch(addToFilter({ filterName: "categories", filterValue: value }));
    dispatch(filterByCategories());
  };
  const stylesFilteringHandler = (value) => {
    dispatch(addToFilter({ filterName: "styles", filterValue: value }));
    dispatch(filterByStyles());
  };

  const handelReset = () => {
    dispatch(resetFilters());
  };

  function prevPage() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    if (currentPage !== pageNumbers[pageNumbers.length - 1])
      setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <section className="mx-10 my-6 flex items-center justify-between">
        <div className="flex-center min-h-10 max-w-[80%] flex-wrap gap-5">
          <h3 className="text-2xl text-blue-1000">
            <span className="font-normal ">{fontAwesomeSvgs.length} </span>
            <span className="font-ceraroundpros font-bold">Icons</span>
          </h3>
          {licenses.map((name) => (
            <button
              key={"licenses" + name}
              onClick={() => licenseFilteringHandler(name)}
              className="group cursor-pointer rounded-full bg-white px-4 py-2"
            >
              <p className="font-ceraroundpros text-sm font-bold uppercase text-slate-800 group-hover:text-blue-500">
                {name}
                <span className="ml-3 text-[11px] font-bold group-hover:text-red-600">
                  x
                </span>
              </p>
            </button>
          ))}
          {categories.map((name) => (
            <button
              key={"categories" + name}
              onClick={() => categoriesFilteringHandler(name)}
              className="group cursor-pointer rounded-full bg-white px-4 py-2"
            >
              <p className="font-ceraroundpros text-sm font-bold uppercase text-slate-800 group-hover:text-blue-500">
                {name}
                <span className="ml-3 text-[11px] font-bold group-hover:text-red-600">
                  x
                </span>
              </p>
            </button>
          ))}
          {features.map((name) => (
            <button
              key={"categories" + name}
              onClick={() => featuresFilteringHandler(name)}
              className="group cursor-pointer rounded-full bg-white px-4 py-2"
            >
              <p className="font-ceraroundpros text-sm font-bold uppercase text-slate-800 group-hover:text-blue-500">
                {name}
                <span className="ml-3 text-[11px] font-bold group-hover:text-red-600">
                  x
                </span>
              </p>
            </button>
          ))}
          {styles.map((name) => (
            <button
              key={"categories" + name}
              onClick={() => stylesFilteringHandler(name)}
              className="group cursor-pointer rounded-full bg-white px-4 py-2"
            >
              <p className="font-ceraroundpros text-sm font-bold uppercase text-slate-800 group-hover:text-blue-500">
                {name}
                <span className="ml-3 text-[11px] font-bold group-hover:text-red-600">
                  x
                </span>
              </p>
            </button>
          ))}
          {(licenses.length > 0 ||
            categories.length > 0 ||
            features.length > 0 ||
            styles.length > 0) && (
            <button
              onClick={handelReset}
              className="group cursor-pointer rounded-full border border-slate-400 bg-transparent px-4 py-2 hover:border-blue-500"
            >
              <p className="font-ceraroundpros text-sm font-bold uppercase text-slate-800 group-hover:text-blue-500">
                Reset
              </p>
            </button>
          )}
        </div>
        <div>
          <h4
            className={`text-lg text-slate-500 ${fontAwesomeSvgs.length <= cardsPerPage && "invisible"}`}
          >
            <span className="font-ceraroundpros ">Page </span> {currentPage}
            <span className="font-ceraroundpros ">out of</span>
            {pageNumbers[pageNumbers.length - 1]}
          </h4>
        </div>
      </section>

      {fontAwesomeSvgs.length > cardsPerPage ? (
        <>
          <IconsComponent fontAwesomeSvgs={currentCards} />
          {/*Pagination Buttons*/}
          <nav className="my-10">
            <ul>
              <div className="flex-center">
                {currentPage > 1 && (
                  <button
                    className="mr-2 rounded-[6px] fill-blue-800 px-8 py-4 hover:bg-gray-300"
                    onClick={prevPage}
                  >
                    <div className="flex-center">
                      <svg
                        className="aspect-square w-[1.5rem] fill-blue-800"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,320,512"
                      >
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                      </svg>
                      <span className="font-medium text-blue-800">Prev</span>
                    </div>
                  </button>
                )}
                {pageNumbers
                  .slice(-1 + currentPage, 3 + currentPage)
                  .map((number) => {
                    return (
                      <button
                        key={"pagination" + number}
                        onClick={() => paginate(number)}
                        className={`mr-2 rounded-[6px] px-6 py-4 font-medium ${
                          currentPage === number
                            ? "bg-blue-700 text-white "
                            : "text-blue-800 hover:bg-gray-300"
                        }`}
                      >
                        {number}
                      </button>
                    );
                  })}
                <span className="mx-3 text-gray-600">
                  ... {pageNumbers[pageNumbers.length - 1]}
                </span>
                <button
                  className="mr-2 rounded-[6px] fill-blue-800 px-8 py-4 hover:bg-gray-300"
                  onClick={nextPage}
                >
                  <div className="flex-center ">
                    <span className="font-medium text-blue-800">Next</span>
                    <svg
                      className="aspect-square w-[2rem] fill-blue-800"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0,0,320,512"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </ul>
          </nav>
        </>
      ) : (
        <IconsComponent fontAwesomeSvgs={fontAwesomeSvgs} />
      )}
    </>
  );
};

export default PaginationComponent;
