import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ stars }) => {
  const AllStar = [];

  for (let i = 0; i <= 4; i++) {
    AllStar.push(
      stars >= i + 1 ? (
        <FaStar />
      ) : stars >= i + 0.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )
    );
  }
  return <div className="flex text-yellow-400">{AllStar}</div>;
};

export default Stars;
