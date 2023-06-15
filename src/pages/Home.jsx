import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"

const Home = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <section style={{ marginBottom: '20px' }}>
        <h1>Welcome to A Painter's Web!</h1>
        <div style={{ marginTop: '20px' }}>
          <img src={img1} alt="Work 1" />
        </div>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>Currently Popular Works</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <img src={img2} alt="Work 2" style={{ marginRight: '10px' }}  />
          <img src={img3} alt="Work 3" style={{ marginRight: '10px' }}  />
          <img src={img4} alt="Work 4" />
        </div>
        <Link to="/works" style={{ display: 'block', marginTop: '10px' }}>
          View all works
        </Link>
      </section>

      <section>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <h2>About Us</h2>
        </Link>
      </section>
    </div></>
  );
};

export default Home;
