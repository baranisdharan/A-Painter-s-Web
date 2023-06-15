import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const Works = () => {
  return (
    <>
      <NavBar />
      <h1>Works</h1>
      <div className="works-grid">
        <Link to="/works/1"> {/* Update the link to include the specific work ID */}
          <img src={img1} alt="Work 1" style={{ marginRight: '100px' }}  />
        </Link>
        <Link to="/works/2">
          <img src={img2} alt="Work 2" style={{ marginRight: '100px' }} />
        </Link>
        <Link to="/works/3">
          <img src={img3} alt="Work 3" style={{ marginRight: '100px' }} />
        </Link>
        <Link to="/works/4">
          <img src={img4} alt="Work 4" style={{ marginRight: '100px' }} />
        </Link>
        <Link to="/works/5">
          <img src={img5} alt="Work 5" style={{ marginRight: '100px' }} />
        </Link>
        <Link to="/works/6">
          <img src={img6} alt="Work 6" style={{ marginRight: '100px' }} />
        </Link>
      </div>
    </>
  );
};

export default Works;
