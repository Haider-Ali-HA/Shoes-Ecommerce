import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-[#ffffff] items-center justify-center gap-5">
        <div className=" flex w-4/5 items-center justify-center">
          <img
            priority
            src="/image/404Custom.svg"
            width={600}
            height={600}
            alt="404 error image"
          />
        </div>
        <p className="text-base text-black sm:text-lg text-center">
          The page you are looking for might have been removed,
          <br /> had its name changed or is temporarily unavailable.{" "}
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-3 py-3 md:p-5 text-sm md:text-base rounded-full bg-[#f03030] border border-[#f03030] transition-all duration-500 hover:bg-transparent font-bold text-white hover:text-black"
        >
          GO TO HOMEPAGE
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
