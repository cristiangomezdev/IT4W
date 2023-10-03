import React from 'react'
import { Outlet } from 'react-router-dom'

 const Layout = () => {
  return (
    <>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div className="bg-gray-900 min-h-screen">
      <img className="w-[320px] mx-auto mt-5 mb-4" src={`/assets/logo.png`} alt="" />
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Outlet/>
      </div>
    </div>
    </>
  )
}
export default Layout;