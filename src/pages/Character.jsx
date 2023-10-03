import React, { useEffect, useState } from "react";
import HTTPAdapter from "../api/HTTPAdapter";
import { useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import CharacterCard from "../components/card/CharacterCard";
import { Loading } from "../components/Loading";

export const Character = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  if(id > 89) navigate('/404');
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await HTTPAdapter(
          "get",
          `https://swapi.dev/api/people/${id}`,
          ""
        );
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (data === null) {
    return <Loading size={35}/>;
  }
  return (
    <>
      <div className="grid grid-cols-1  gap-4">
      <GoBack />
        <CharacterCard 
            character={data}
        />
      </div>
    </>
  );
};
