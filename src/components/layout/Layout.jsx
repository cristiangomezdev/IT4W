import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div
        className=" bg-cover min-h-screen"
        style={{ backgroundImage: 'url("/assets/space.jpg")' }}
      >
        <img
          className="w-[320px] mx-auto pt-5 mb-4"
          src={`/assets/logo.png`}
          alt=""
        />
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
