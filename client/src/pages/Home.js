import React from "react";
import HomeNav from "../components/HomeNav";
import homePageImg from "../images/01.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <HomeNav />
      <div className="home">
        <img className="homepageBanner" src={homePageImg} alt="ForeverNote" />
        <div className="homepage__text">
          <p className="homepage__heading">Welcome to ForeverNote</p>
          <p className="homepage__para">
            Create multiple notes and store them with ease.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
