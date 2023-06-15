import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import "../main.css"

const WorksItem = () => {
  const { id } = useParams(); // Access the work ID from the URL

  // Assuming you have an array of work details
  const works = [
    {
      id: 1,
      title: "Art Title 1",
      artist: "Artist Name 1",
      year: "Year 1",
      image: img1,
    },
    {
      id: 2,
      title: "Art Title 2",
      artist: "Artist Name 2",
      year: "Year 2",
      image: img2,
    },
    {
      id: 3,
      title: "Art Title 3",
      artist: "Artist Name 3",
      year: "Year 3",
      image: img3,
    },
    {
      id: 4,
      title: "Art Title 4",
      artist: "Artist Name 4",
      year: "Year 4",
      image: img4,
    },
    {
      id: 5,
      title: "Art Title 5",
      artist: "Artist Name 5",
      year: "Year 5",
      image: img5,
    },
    {
      id: 6,
      title: "Art Title 6",
      artist: "Artist Name 6",
      year: "Year 6",
      image: img6,
    }
    
  ];

  // Find the work item based on the provided ID
  const work = works.find((item) => item.id === parseInt(id));

  if (!work) {
    return <div>Work not found!</div>; // Handle case when work is not found
  }

  return (
    <>
      <NavBar />
      <div className="work-item-container">
        <div className="work-item-content">
          <div className="work-image">
            <img src={work.image} alt={work.title} />
          </div>
          <div className="work-details">
            <h2>{work.title}</h2>
            <p>{work.artist}</p>
            <p>{work.year}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksItem;
