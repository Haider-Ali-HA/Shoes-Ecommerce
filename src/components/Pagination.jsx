import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const [lastPage, setLastPage] = useState(1);
  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`${
            currentPage === i
              ? "bg-black text-white w-7 h-7  rounded hover:bg-gray-800  "
              : "border text-black w-7 h-7  rounded hover:bg-gray-400"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };
  useEffect(() => {
    setLastPage(totalPages);
  }, [totalPages]); 

  return (
    <div className="w-full xl:w-3/4 flex items-center justify-center gap-3 mb-10">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={
          currentPage === 1
            ? "hidden"
            : "flex items-center border bg-white hover:bg-gray-400 text-black w-16 h-7 rounded justify-center"
        }
      >
        <IoIosArrowBack />
        <span >Prev</span>
      </button>
      <span className="flex gap-4 ">{renderPageNumbers()}</span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={
          currentPage === totalPages
            ? "hidden"
            : "flex items-center border bg-white hover:bg-gray-400 text-black w-16 h-7 rounded justify-center"
        }
      >
        <span>Next</span>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
export default Pagination;
