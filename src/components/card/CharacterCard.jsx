import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = character;
  const { id } = useParams();
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
            alt={name}
            className="h-full w-full object-cover md:w-48"
          />
        </div>
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4">{name}</h2>
          <div className="mb-2">Height: {height} cm</div>
          <div className="mb-2">Mass: {mass} kg</div>
          <div className="mb-2">Hair Color: {hair_color}</div>
          <div className="mb-2">Skin Color: {skin_color}</div>
          <div className="mb-2">Eye Color: {eye_color}</div>
          <div className="mb-2">Birth Year: {birth_year}</div>
          <div>Gender: {gender}</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;