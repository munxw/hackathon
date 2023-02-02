import React from "react";
import "../AboutUs/About.css";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          omnis explicabo accusamus eligendi. Sint, aliquid! Itaque, minus natus
          totam assumenda explicabo omnis facilis alias. Praesentium architecto
          perspiciatis ullam fugiat ut?
        </p>

        <button className="btn">VIEW MORE ABOUT US</button>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://i.pinimg.com/474x/83/99/92/83999277bedfdb1b917b1be7640f40c1.jpg"
              alt="true"
            />
          </div>
          <div className="img-stack bottom">
            <img
              src="https://i.pinimg.com/474x/e8/15/33/e8153325c58fdfc44df7ed878bdbda80.jpg"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
