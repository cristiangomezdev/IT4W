import React from 'react'

export const Loading = ({size}) => {
  return (
    <div className="w-[1%] mx-auto flex-center h-10">
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className="animate-spin mt-5">
      <div className="h-full w-full border-4 border-t-gray-500
       border-b-gray-700 rounded-[50%]">
      </div>
    </div>
  </div>
  )
}
