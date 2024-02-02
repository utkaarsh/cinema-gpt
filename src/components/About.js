import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="about-us h-screen  pt-60 items-center px-4 md:px-24 bg-black">
      <h1 className="text-2xl sm:text-5xl  text-white text-center mb-8 font-bold">
        About Cinema GPT 🍿
      </h1>
      <p className="text-gray-400 sm:text-xl mb-8 text-center">
        "Experience Cinema GPT: A Feature-Rich, Mobile-Friendly Netflix Clone
        with Cutting-Edge Tech Stack! 🚀
        <br />
        <br />
        Dive into the world of Cinema GPT, a carefully crafted Netflix clone
        that boasts an impressive tech stack including React, Redux, Webpack,
        React Router, TMDB APIs, Tailwind CSS, Firebase, React-DOM. The result?
        An exceptional web application designed for optimal performance and
        seamless user interactions Discover a user-friendly interface that
        offers an immersive viewing experience, all in the palm of your hand.
        <br />
        <p className="hidden sm:flex">
          {" "}
          Join me in the future of web development, where innovation and
          user-centric design converge to create Cinema GPT—a showcase of what's
          possible in the realm of entertainment.
        </p>
      </p>

      <div className="mb-8 text-gray-200">
        Github:{" "}
        <a
          href="https://github.com/utkaarsh/cinema-gpt"
          className="hover:text-blue-700 ml-3 text-blue-600 text-sm"
          target="_blank"
          rel="noreferrer"
        >
          Cinema GPT
        </a>
        <br />
        <br></br>
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/utkarsh-r-6b6b05219/"
          className="hover:text-blue-700 ml-3 text-blue-600 text-sm"
          target="_blank"
          rel="noreferrer"
        >
          Utkarsh Ranpise
        </a>
      </div>
    </div>
  );
};

export default About;
