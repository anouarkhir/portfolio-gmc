import React from "react";
import Button from "./Button";

const Content = props => (
  <main className="main">
    <div className="left">
      <img src={props.image} alt={props.text} className="avatar" />
    </div>
    <div className="right">
      <h1>
        Hello,<p>a bit about me:</p>
      </h1>

      <div className="btn-wrapper">
        <Button title="MY RESUME" />
        <Button title="MY WORKS" />
        <Button title="MY SKILLS" />
      </div>

      <p className="description">
        I am here to show you why react js is so powerful to build your web
        applications. and why you should become a developer!
      </p>
      <p className="description">
        I have been working for 3 years, specializing in Front-End development.
        <br />I love Javascript, as well as its frameworks jQuery and React.js.
      </p>
    </div>
  </main>
);

export default Content;
