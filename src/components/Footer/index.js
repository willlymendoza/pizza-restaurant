import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="section-title">
          <i className="fas fa-pizza-slice"></i>
        </div>

        <div className="footer-item">
          <h2>Address</h2>
          <h3>342 street, CA</h3>
        </div>
        <div className="footer-item">
          <h2>Phone</h2>
          <h3>+00 55224466</h3>
        </div>
        <div className="footer-item">
          <h2>Email</h2>
          <h3>yourfavoritepizza@gmail.com</h3>
        </div>

        <div className="footer-item">
          <div className="footer-item-socials">
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <h3 className="copyright">
          Copyright yourfavoritepizza.com <br />
          All rights reserved
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
