import React from 'react';

const Card = ({ title, episode_id, description, director }) => {

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl gap-2 mt-4" >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-48"
            src={`/assets/films/${episode_id}.jpg`}
            alt={title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Episode {episode_id}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{description}</p>
          <p className="mt-2">Director: {director}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;