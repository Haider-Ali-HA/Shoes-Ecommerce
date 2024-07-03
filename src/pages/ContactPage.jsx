import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center w-full my-28">
      <form className="flex flex-col items-center justify-center   gap-4" action="https://formspree.io/f/mrbzgkoq" method="post">
        <input className="text-sm sm:text-base border w-72 sm:w-96 outline-none p-3 h-10 sm:h-12 rounded-lg" name="Username" type="text" required autoComplete="off" placeholder="Enter name" />
        <input className="text-sm sm:text-base border w-72 sm:w-96 outline-none p-3 h-10 sm:h-12 rounded-lg" name="Email" type="email" required autoComplete="off" placeholder=" Enter email" />
        <textarea className="text-sm sm:text-base border w-72 sm:w-96 outline-none p-3 h-10 sm:h-36 rounded-lg" name="Description" required autoComplete="off" placeholder="Enter your message"></textarea>
        <div className="text-base font-semibold my-4">
          <button type="submit" className="bg-[#f03030] border border-[#f03030] text-xs md:text-base hover:bg-transparent hover:text-black rounded-full h-10 w-24 md:w-32  md:h-12 text-white transition-all duration-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
