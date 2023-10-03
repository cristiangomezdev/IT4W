import React from "react";
import GoBack from "../components/GoBack";

const NotFound = () => {
  return (
    <>
      <div className="grid  gap-4">
        <GoBack />
        <p className="text-4xl font-bold text-center text-yellow-500">404</p>
      </div>
    </>
  );
};

export default NotFound;
