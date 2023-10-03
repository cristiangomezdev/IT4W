import React, { useEffect, useState } from "react";
import HTTPAdapter from "../api/HTTPAdapter";
import Card from "../components/card/Card";
import { useParams } from "react-router-dom";
import Characters from "../components/characters/Characters";

export const Film = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await HTTPAdapter(
          "get",
          `https://swapi.dev/api/films/${id}`,
          ""
        );
        setData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (data === null) {
    return <h1>1</h1>;
  }
  return (
    <>
      <div className="grid grid-cols-1  gap-4">
        <Card
          title={data.title}
          episode_id={data.episode_id}
          description={data.description}
          director={data.director}
          key={data.episode_id}
        />
        <Characters characters={data.characters}/>
      </div>
    </>
  );
};
