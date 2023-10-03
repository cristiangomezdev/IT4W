import React, { useEffect, useState } from "react";
import HTTPAdapter from "../api/HTTPAdapter";
import Card from "../components/card/Card";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.results ? (
              data.results.map((movie) => (
                  <Card
                    title={movie.title}
                    episode_id={movie.episode_id}
                    description={movie.description}
                    director={movie.director}
                    key={movie.episode_id}
                  />
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
    </>
  );
};
