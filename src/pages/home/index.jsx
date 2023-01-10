import React from "react";
import Testimonials from "../../components/testimonials";

import "./home.scss";

const Home = () => {
  const digitalizing = [
    {
      img: "https://res.cloudinary.com/intuneteq/image/upload/v1673341463/Link-park-v2/342_teacher_outline_ztilts.png",
      head: "Improving Schooling Experience",
      text: "Bringing school to you anywhere and anytime, using resources provided by teachers and permitting parents follow up.",
    },
    {
      img: "https://res.cloudinary.com/intuneteq/image/upload/v1673341511/Link-park-v2/447_reading_a_book_outline_g1injd.png",
      head: "Easy to use and understand",
      text: "Bringing school to you anywhere and anytime, using resources provided by teachers and permitting parents follow up.",
    },
    {
      img: "https://res.cloudinary.com/intuneteq/image/upload/v1673341523/Link-park-v2/14_book_lover_outline_qheyt5.png",
      head: "Enjoy Class Anywhere",
      text: "Bringing school to you anywhere and anytime, using resources provided by teachers and permitting parents follow up.",
    },
  ];

  const achievements = [
    {
      figure: "250+",
      text: "Schools are registered across the nation.",
    },
    {
      figure: "85%+",
      text: "Increase in productivity level of students",
    },
    {
      figure: "2000+",
      text: "School students are registered",
    },
    {
      figure: "1500+",
      text: "Parents endorse this learning plaform",
    },
  ];
  return (
    <main className="home">
      <section className="home__section1 app__flex-2">
        <article className="home__section1-article">
          <h1 className="head-text">Simplifying Education For you</h1>
          <p className="p-text">
            Bringing school to you anywhere and anytime, using resources
            provided by teachers and permitting parents follow up.
          </p>
          <div className="app__flex">
            <button className="btn-tertiary">Get Started</button>
            <button className="about-btn">About us</button>
          </div>
        </article>
        <div className="home__section1-img img-size">
          <img
            src="https://res.cloudinary.com/intuneteq/image/upload/v1673340155/Link-park-v2/Group_15936_gbrgdu.png"
            alt="child"
          />
        </div>
      </section>
      <section className="home__digital column-flex">
        <h3 className="sub-text">Digitalizing Schooling Experience</h3>
        <p className="p-text-2">
          Bringing school to you anywhere and anytime, using resources provided
          by teachers and permitting parents follow up.
        </p>
        <article className="section__digital-modal app__flex-2">
          {digitalizing.map((item, index) => (
            <div className="modal-div column-flex" key={index}>
              <div className="img-size">
                <img src={item.img} alt="item" />
              </div>
              <h6>{item.head}</h6>
              <p className="p-text-2">{item.text}</p>
            </div>
          ))}
        </article>
      </section>
      <section className="home__works column-flex">
        <h3 className="sub-text">How it Works</h3>
        <p className="p-text-2">
          Below are the steps you can take to navigate around our site to get
          started
        </p>
        <article className="app__flex-2 home__works-article">
          <div className="article-content">
            <h4 className="sub-text">Register/Sign In</h4>
            <p className="p-text">
              Bringing school to you anywhere and anytime, using resources
              provided by teachers and permitting parents follow up. Bringing
              school to you anywhere and anytime, using resources provided by
              teachers and permitting parents follow up.{" "}
            </p>
          </div>
          <div className="article-img img-size">
            <img
              src="https://res.cloudinary.com/intuneteq/image/upload/v1673344016/Link-park-v2/MBP_Mockup_1_ayvmx0.png"
              alt="register"
            />
          </div>
          <div className="article-arrow">
            <img
              src="https://res.cloudinary.com/intuneteq/image/upload/v1673345502/Link-park-v2/Vector_40_uhew1g.png"
              alt="arrows"
            />
          </div>
        </article>
        <article className="app__flex-2 home__works-article">
          <div className="article-img img-size">
            <img
              src="https://res.cloudinary.com/intuneteq/image/upload/v1673345122/Link-park-v2/MBP_Mockup_2_tj9zaj.png"
              alt="activities"
            />
          </div>
          <div className="article-content">
            <h4 className="sub-text">Monitor Students Activities</h4>
            <p className="p-text">
              Bringing school to you anywhere and anytime, using resources
              provided by teachers and permitting parents follow up. Bringing
              school to you anywhere and anytime, using resources provided by
              teachers and permitting parents follow up.
            </p>
          </div>
          <div className="article-arrow-2">
            <img
              src="https://res.cloudinary.com/intuneteq/image/upload/v1673346095/Link-park-v2/Vector_41_m6xajf.png"
              alt="arrows"
            />
          </div>
        </article>
        <article className="app__flex-2 home__works-article">
          <div className="article-content">
            <h4 className="sub-text">Receive Daily Notifications</h4>
            <p className="p-text">
              Bringing school to you anywhere and anytime, using resources
              provided by teachers and permitting parents follow up. Bringing
              school to you anywhere and anytime, using resources provided by
              teachers and permitting parents follow up.
            </p>
          </div>
          <div className="article-img img-size">
            <img
              src="https://res.cloudinary.com/intuneteq/image/upload/v1673344016/Link-park-v2/MBP_Mockup_1_ayvmx0.png"
              alt="register"
            />
          </div>
        </article>
      </section>
      <section className="home__achievements column-flex">
        <h3 className="sub-text">Our Achievements</h3>
        <article className="home__achievements-content app__flex-2">
          {achievements.map((item, index) => (
            <div className="achievements" key={index}>
              <h5>{item.figure}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </article>
      </section>
      <section className="home__track column-flex">
        <h2 className="head-text">
          Effectively Track Your <span>Wards Learning</span> Process
        </h2>
        <p className="p-text">
          With simplified medium, upload learning resources and track all of
          your students learning process.
        </p>
        <button className="btn-primary">Get Started</button>
      </section>
      <section className="home__walk app__flex-2">
        <div className="dot1 img-size">
          <img
            src="https://res.cloudinary.com/intuneteq/image/upload/v1673348911/Link-park-v2/Group_15903_nwxj4p.png"
            alt=""
          />
        </div>
        <div className="home__walk-img img-size">
          <img
            src="https://res.cloudinary.com/intuneteq/image/upload/v1673348742/Link-park-v2/Group_15904_fvlbmd.png"
            alt="video"
          />
        </div>
        <article className="home__walk-article">
          <h6 className="sub-text">Have a walk around our site</h6>
          <p className="p-text">
            Link up with your school and enjoy class from anywhere.
          </p>
          <button className="btn-secondary">About Us</button>
        </article>
        <div className="dot2 img-size">
          <img
            src="https://res.cloudinary.com/intuneteq/image/upload/v1673348911/Link-park-v2/Group_15903_nwxj4p.png"
            alt=""
          />
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
    </main>
  );
};

export default Home;
