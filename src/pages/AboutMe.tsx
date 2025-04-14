import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackBtn from "../components/BackBtn";
const AboutMe = () => {
  return (
    <div>
      <Header />
      <BackBtn to={"/"} text={"←"} />
      <h1 className="proj-title">About Me</h1>
      <p className="proj-description">
      I'm Leon, an experience designer and creative technologist freelancing in Barcelona.
       With a degree in Communication Design from the University of Applied Sciences and HTW, complemented by formal apprenticeships in both media design and mechatronics, I bring a unique blend of creative vision and technical expertise to every project.
      ver the past three years, I've developed interactive systems for escape rooms and digital outdoor adventures, focusing on immersive multimedia edutainment experiences with AR integration. My professional work centers on creating engaging, gamified experiences that seamlessly blend digital and physical worlds through interactive storytelling.
        I’m Leon, I work freelance as a creative technologist and software
        developer in Barcelona.
        <br/>
        <br/>
        <br/>
        My Approach
        <br/>
        <br/>
<li>Conception of gamified experiences with engaging interactive storytelling</li>
<li>Development of immersive experiences that blend digital and physical worlds</li>
<li>Executing full project lifecycle as a proven solo developer</li>
<li>Delivering end-to-end solutions from concept to market-ready implementation</li>
<br/>
<br/>

Beyond my commercial work, I explore the intersection of technology and art as a media artist, VJ and live coder under the moniker LXT. Through interactive art and media projects, I investigate human-machine interaction and the evolving nature of digital connections, creating experiences that forge new pathways between technology and human experience.
I've also shared my knowledge by teaching TouchDesigner introduction courses at HTW Berlin.
<br/>
<br/>
Interested in collaborating? I'd love to hear from you.

        Feel free to write me at{" "}
        <a className="textLink" href="mailto:leon.volbers@gmail.com">
          leon.volbers@gmail.com
        </a>{" "}
        or{" "}
        <a
          className="textLink"
          href="https://www.instagram.com/levoxtrip/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram.
        </a>
      </p>
      <Footer />
    </div>
  );
};

export default AboutMe;
