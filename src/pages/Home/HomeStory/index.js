import React from "react";
import "./styles.scss";
import SectionTitle from "components/SectionTitle";

const HomeStory = () => {
  return (
    <section className="story section">
      <div className="story-img-left"></div>
      <div className="story-img-right"></div>

      <div className="story-container">
        <SectionTitle text="our story" />

        <div className="story-content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            accusantium, rem mollitia in asperiores veritatis! Similique
            consequatur saepe voluptatibus, eligendi tempore rem aspernatur
            eaque blanditiis impedit obcaecati temporibus soluta earum deleniti
            aut quod maxime labore expedita perspiciatis pariatur quasi
            asperiores?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque
            possimus recusandae optio assumenda. Consectetur eligendi modi porro
            reiciendis, blanditiis molestias ducimus! Omnis fugiat sint placeat
            nemo dicta harum quae explicabo nam! Libero nostrum accusantium, ut
            autem beatae nisi quaerat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeStory;
