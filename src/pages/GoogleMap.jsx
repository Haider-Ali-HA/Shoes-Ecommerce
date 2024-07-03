import React from "react";

const GoogleMap = () => {
  return (
    <div className="h-96  w-full ">
        <h1 className="my-7 font-poppins text-center font-semibold md:font-bold text-xl md:text-2xl">Feel free to contact us </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212348.14326875066!2d72.61430740115014!3d33.73637436168805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfbcbdaf7dcb%3A0x3c68befa31414abd!2sNike%20Flagship%20Store%20Islamabad!5e0!3m2!1sen!2s!4v1720004417385!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
