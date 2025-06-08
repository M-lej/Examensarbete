import React from "react";
import "./Home.css";
import imgPortal from "../assets/images/Portal.png";

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">WCAG</h1>
      <p className="home-subtitle">Web Content Accessibility Guide</p>
      <img
        src={imgPortal}
        alt="Färgglad bild på människor med funktionsnedsättningar"
      />

      <h3 className="home-subtitle">Guidelines; Mestro Edition</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        fuga culpa numquam repudiandae tenetur dolor perferendis esse quae?tecto
        corporis vitae quis. Itaque vero laboriosam ipsum dolorem?
      </p>
      <p>
        Iste ad fuga aspernatur laudantium ipsum odio quisquam dolorum velit
        quibusdam, sit erem ipsuius soluta temporibus omnis delectus perferendis
        aliquam, tenetur quos est rem laboriosam doloremque quod blanditiis.
        Possimus, deserunt.
      </p>
    </div>
  );
};
