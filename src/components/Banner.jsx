import React, { useEffect, useState } from "react";
import "./Banner.css";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const [heading, setHeading] = useState("");
  useEffect(() => {
    const locate = window.location.pathname.replace("/", "");
    console.log(locate);
    setHeading(locate);
  }, []);
  return (
    <div id="banner_section">
      <div className="banner_container">
        <div className="content_area">
          <h1> {heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
