import React from "react";

import { FaArrowDown } from "react-icons/fa";
import Footer from "../../components/footer";
import "./faq.scss";

const Faq = () => {
  return (
    <main>
      <div className="faq">
        <h1>
          Do you have Questions? <br /> We have Answers!
        </h1>
        <section className="app__flex faq__content">
          <div className="faq__content-main">
            <div className="content">
              <h3>
                When sending results to parents do they get results for the
                whole class or get for their child/children?
              </h3>
              <p>
                Parents would only gain access to their child/children's result.
              </p>
            </div>
            <div className="content">
              <h3>Do parent have access to their children workstations?</h3>
              <p>
                Yes, parent do have a bit of access to their children
                workstation!
              </p>
            </div>
            <div className="content">
              <h3>Does link-park provide tutors for students?</h3>
              <p>No, link-park does not provide any tutor for student.</p>
            </div>
            <div className="content">
              <h3>Does link-park provide materials for students?</h3>
              <p>
                Yes, link-park provide educative material that might aid
                students.
              </p>
            </div>
            <div className="content">
              <h3>
                Can parents/teachers monitor their child/student learning
                process?
              </h3>
              <p>
                Yes, learning process and curve reports are shared with teachers
                and parents!
              </p>
            </div>
            <div className="app__flex-3 icon">
              <FaArrowDown /> <p>Show more</p>
            </div>
          </div>
          <div className="faq__img-container">
            <div className="faq__img">
              <img
                src="https://res.cloudinary.com/dxje0rp9f/image/upload/v1672419612/Link%20Park/about_aogf8d.png"
                alt=""
              />
              <div className="circle"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="curve">
                <img src="https://res.cloudinary.com/dxje0rp9f/image/upload/v1673636005/Link%20Park/Line_13_zv4row.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Faq;
