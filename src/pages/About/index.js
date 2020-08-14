import React from "react";
import "./styles.scss";
import SectionTitle from "components/SectionTitle";
import pizza1 from "assets/img/pizza-chef2.jpg";
import pizza2 from "assets/img/pizza-chef3.jpg";

const About = () => {
  return (
    <section className="about section">
      <SectionTitle text="we are your favorite pizza" />

      <div className="about-images">
        <img src={pizza1} alt="pizza-chef2" />
        <img src={pizza2} alt="pizza-chef2" />
      </div>

      <div className="about-content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          impedit consectetur voluptates officiis nisi tempora, facilis aliquid
          dolorem quidem incidunt. Dicta voluptate eos nostrum necessitatibus
          explicabo totam atque blanditiis esse maxime labore quam excepturi
          sequi iste, cupiditate deserunt tenetur ullam nobis repellat quasi
          tempore officiis dignissimos cum. Possimus, nostrum molestiae?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          delectus vitae ex molestiae nemo quod eaque odio a. Aperiam minima
          vitae vel? Nihil rem rerum fugiat tempora ducimus quasi at magni unde.
          Quia maiores placeat saepe dolores? Architecto officia, nostrum, nemo
          dicta omnis magni mollitia nam aliquam, consequatur maiores iusto!
        </p>
      </div>

      <div className="about-menu-button">
        <a className="btn" href="#">
          see our menu
        </a>
      </div>
    </section>
  );
};

export default About;
