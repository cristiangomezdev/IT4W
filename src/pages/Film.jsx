import React, { useEffect, useState } from "react";
import HTTPAdapter from "../api/HTTPAdapter";
import Card from "../components/card/Card";
import { useNavigate, useParams } from "react-router-dom";
import Characters from "../components/characters/Characters";
import GoBack from "../components/GoBack";
import { Loading } from "../components/Loading";

export const Film = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  if (id > 6) navigate("/404");
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await HTTPAdapter(
          "get",
          `https://swapi.dev/api/films/${id}`,
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
    return <Loading size={35} />;
  }
  return (
    <>
      <div className="grid grid-cols-1  gap-4">
        <GoBack />
        <Card
          title={data.title}
          episode_id={data.episode_id}
          description={data.opening_crawl}
          director={data.director}
          url={data.url}
          key={data.episode_id}
        />
        <Characters characters={data.characters} />
      </div>
    </>
  );
};
