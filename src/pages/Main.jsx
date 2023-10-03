import React, { useEffect, useState } from "react";
import HTTPAdapter from "../api/HTTPAdapter";
import Card from "../components/card/Card";
export const movieData = {
  title: "Star Wars: Episode IV - A New Hope",
  episodeId: 4,
  description:
    "The film that started the Star Wars saga. Luke Skywalker embarks on a journey to defeat the Galactic Empire.",
  director: "George Lucas",
  imageUrl:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7937/7937192_so.jpg",
};
export const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await HTTPAdapter(
          "",
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
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="bg-gray-900 min-h-screen">
        <img className="w-[320px] mx-auto mt-5 mb-4" src={`/assets/logo.png`} alt="" />
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.results ? (
              data.results.map((movie) => (
                <div key={movie.episode_id}>
                  <Card
                    title={movie.title}
                    episode_id={movie.episode_id}
                    description={movie.description}
                    director={movie.director}
                    key={movie.episode_id}
                  />
                </div>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
