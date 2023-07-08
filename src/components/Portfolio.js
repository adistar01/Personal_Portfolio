import React from "react";
import Wi_Fi_Heatmap_Application from "../assets/portfolio/android.jpg";
import Movie_Recommender_System from "../assets/portfolio/movie_recommender.jpg";
import Space_Invader_Game from "../assets/portfolio/pygame.jpg";
import Django_Projects from "../assets/portfolio/python_django.jpg";
import Astro_Blog from "../assets/portfolio/blog.jpg";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: Wi_Fi_Heatmap_Application,
      title: "Wi-Fi Heatmap Application",
      address: "https://github.com/adistar01/Wi-Fi_Heatmap_Application"
    },
    {
      id: 2,
      src: Movie_Recommender_System,
      title: "Movie Recommender System",
      address: "https://github.com/adistar01/Movie-recommender-system"
    },
    {
        id: 3,
        src: Space_Invader_Game,
        title: "Space Invader Game",
        address: "https://github.com/adistar01/pygame-space-invader"
    },
    {
        id: 4,
        src: Django_Projects,
        title: "Django Projects",
        address: "https://github.com/adistar01/Django_Projects"
    },
    {
        id: 5,
        src: Astro_Blog,
        title: "Astro Blog",
        address: "https://github.com/adistar01/Astro_Blog"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          <p className="py-6">Check out some of my work right here : </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({title, id, src, address }) => {
            return (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200"
              />
              <div className="flex items-center justify-center">
                <a href={address} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <h1>{title}</h1>
                </a>
              </div>
            
          </div>
            )
        })}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
