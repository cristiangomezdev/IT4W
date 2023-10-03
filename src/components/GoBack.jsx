import React from 'react';
import { useNavigate  } from 'react-router-dom';

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <button onClick={handleGoBack} className="bg-gray-500 opacity-50 hover:opacity-100 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
      Go Back
    </button>
  );
};

export default GoBack;