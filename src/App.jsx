import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { contact } from "./assets/data/contact";
import avatar from "./assets/data/avatar.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header name={contact.name} job={contact.job} />
        <Content image={avatar} text={contact.avatar.alt} />
      </div>

      <Footer
        phone={contact.phone}
        email={contact.email}
        linkedin={contact.linkedin}
        skype={contact.skype}
        codepen={contact.codepen}
        github={contact.github}
      />
    </>
  );
}

export default App;
