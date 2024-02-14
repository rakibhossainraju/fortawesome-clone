import { useState } from "react";
import { IconsComponent } from "./IconsComponent.jsx";

const PaginationComponent = ({ fontAwesomeSvgs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 94;
  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = fontAwesomeSvgs.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(fontAwesomeSvgs.length / postPerPage); i++)
    pageNumbers.push(i);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
        <div className="max-w-[80%]">
          <h3 className="text-2xl text-blue-1000">
            <span className="font-normal ">{fontAwesomeSvgs.length} </span>
            <span className="font-ceraroundpros font-bold">Icons</span>
          </h3>
        </div>
        <div>
          <h4
            className={`text-lg text-slate-500 ${fontAwesomeSvgs.length <= postPerPage && "invisible"}`}
          >
            <span className="font-ceraroundpros ">Page </span> {currentPage}
            <span className="font-ceraroundpros ">out of</span>{" "}
            {pageNumbers[pageNumbers.length - 1]}
          </h4>
        </div>
      </section>
      {fontAwesomeSvgs.length > postPerPage ? (
        <>
          <IconsComponent fontAwesomeSvgs={currentPost} />
          {/*Pagination Buttons*/}
          <nav>
            <ul className="mb-10">
              <div>
                <button
                  className="rounded-xl bg-violet-700 p-4 text-white"
                  onClick={prevPage}
                >
                  Prev Page
                </button>
                <div className="gap4 flex">
                  {pageNumbers
                    .slice(-1 + currentPage, 3 + currentPage)
                    .map((number) => {
                      return (
                        <li
                          key={"pagination" + number}
                          onClick={() => paginate(number)}
                          className="bg-blue-500 p-2 text-white"
                        >
                          {currentPage === number && "I am the active page"}
                          {number}
                        </li>
                      );
                    })}
                </div>
                <button
                  className="rounded-xl bg-violet-700 p-4 text-white"
                  onClick={nextPage}
                >
                  Next Page
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
