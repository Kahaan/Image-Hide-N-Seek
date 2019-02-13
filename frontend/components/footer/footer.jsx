import React from "react";

const Footer = () => (
  <footer className="footer">
    <section className="foot-left" id="foot-left">
      <p>
        <i>“Man is not what he thinks he is, he is what he hides.”</i>
        <b>― André Malraux</b>{" "}
      </p>
    </section>
    <section className="foot-right">
      <a href="https://github.com/Kahaan">
        <i className="fab fa-github fa-2x" aria-hidden="true" />
      </a>
      <a href="https://www.linkedin.com/in/kahaan-patel-a89952a3/">
        <i className="fab fa-linkedin fa-2x" aria-hidden="true" />
      </a>
      <a href="mailto:kahaan.r.patel@gmail.com">
        <i className="fas fa-envelope fa-2x" aria-hidden="true" />
      </a>
    </section>
  </footer>
);

export default Footer;
