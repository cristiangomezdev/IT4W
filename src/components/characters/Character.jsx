
import { Link } from "react-router-dom";
import {images} from '../../images'; 
const Character = ({ url, index }) => {
  const id = url.split("/").filter(Boolean).pop();
  const imageUrl = images[id] || "https://via.placeholder.com/150?text=No+Image";
  return (
    <Link key={index} to={`/character/${id}`} className="space-x-4 mb-2 ">
      <img
        src={imageUrl}
        className="h-20 w-20 rounded-full object-cover hover:scale-105 transition duration-300 ease-in-out"
      />
    </Link>
  );
};

export default Character;
