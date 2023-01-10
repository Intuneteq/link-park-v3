import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

import "./home.scss";

const Home = () => {
  return (
    <main className="home">
      <section className="home__section1 app__flex-2">
        <article className="home__section1-article">
          <h1 className="head-text">
            Simplifying <span>Education</span> For you
          </h1>
          <p className="p-text">
            Bringing school to you anywhere and anytime, using resources
            provided by teachers and permitting parents follow up.
          </p>
          <div className="app__flex">
            <button className="btn-primary">Get Started</button>
            <p className="p-text app__flex">
              <span>Watch info</span>
              <AiOutlinePlayCircle />
            </p>
          </div>
        </article>
        <div className="home__section1-img img-size">
          <img
            src="https://res.cloudinary.com/intuneteq/image/upload/v1673259493/Link-park-v2/Rectangle_1681_ehs1wu.png"
            alt="child"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
