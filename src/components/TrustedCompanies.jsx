import React from "react";

const TrustedCompanies = () => {
  return (
    <div className="bg-[#ffffff] md:my-10 h-full w-full px-5 py-10 flex flex-col items-center gap-11">
      <h1 className="text-lg md:text-2xl text-center font-semibold font-poppins ">
        Trusted By Many Companies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-10 ">
        <img
          className="w-24 md:w-28 "
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
        />
        <img
          className="w-24 md:w-28"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
        />
        <img
          className="w-24 md:w-28"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
        />
        <img
          className="w-24 md:w-28"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png"
        />
        <img
          className="w-24 md:w-28"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
