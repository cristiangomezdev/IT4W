import React, { useEffect, useState } from "react";
import HTTPAdapter from "../api/HTTPAdapter";
import Card from "../components/card/Card";
import { Loading } from "../components/Loading";

export const Films = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await HTTPAdapter(
          "get",
          "https://swapi.dev/api/films/",
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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {data.results.map((movie) => (
          <Card
            title={movie.title}
            episode_id={movie.episode_id}
            description={movie.opening_crawl}
            director={movie.director}
            url={movie.url}
            key={movie.episode_id}
          />
        ))}
      </div>
    </>
  );
};
