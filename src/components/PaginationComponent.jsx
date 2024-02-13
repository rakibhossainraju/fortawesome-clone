import { useState } from "react";
import IconCardComponent from "./IconCardComponent";

const PaginationComponent = ({ fontAwesomeSvgs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(94);
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
    if (currentPage != 1) setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    if (currentPage !== pageNumbers[pageNumbers.length - 1])
      setCurrentPage(currentPage + 1);
  }

  return (
    <>
      {fontAwesomeSvgs.length > postPerPage ? (
        <>
          <h1 className="self-center text-center text-6xl text-emerald-400">
            Page {currentPage} out of {pageNumbers[pageNumbers.length - 1]}{" "}
          </h1>
          <IconCardComponent fontAwesomeSvgs={currentPost} />
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
          </nav>{" "}
        </>
      ) : (
        <IconCardComponent fontAwesomeSvgs={fontAwesomeSvgs} />
      )}
    </>
  );
};

export default PaginationComponent;
