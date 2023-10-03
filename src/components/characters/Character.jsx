import { useEffect, useState } from "react";
import HTTPAdapter from "../../api/HTTPAdapter";

const Character = ({ url, index }) => {
  const id = url.split("/").filter(Boolean).pop();
  return (
    <a key={index} href={""} className=" space-x-4 mb-2">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="h-20 w-20 rounded-full object-cover"
      />
    </a>
  );
};

export default Character;
