
import { Link } from "react-router-dom";

const Character = ({ url, index }) => {
  const id = url.split("/").filter(Boolean).pop();
  return (
    <Link key={index} to={`/character/${id}`} className="space-x-4 mb-2 ">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="h-20 w-20 rounded-full object-cover hover:scale-105 transition duration-300 ease-in-out"
      />
    </Link>
  );
};

export default Character;
