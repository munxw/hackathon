import React from "react";
import "../Home/styles/Home.css"  

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="home__wrapper">
          {/* home content */}
          <div className="home__content">
            <span className="section__title">65% of</span>
            <h1>NEW PLANT</h1>
            <p>
              Plants are a kingdom of life forms that includes familiar
              organisms such as trees, herbs, bushes, grasses, vines, ferns and
              mosses. Through photosynthesis, they convert water and carbon
              dioxide into the oxygen we breathe and the sugars that provide the
              primary fuel for life. Through nitrogen fixation, plants generate
              proteins that are basic building blocks of life.
            </p>

            <div className="home__btns">
              <button className="buybtn">BUY NOW</button>
              <button className="morebtn">VIEW MORE</button>
            </div>
          </div>
          {/* home img */}
          <div className="home__img">
            <div className="home__img-wrapper"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
