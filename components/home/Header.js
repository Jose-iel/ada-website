import Navbar from "../layout/Navbar";
import { useState, useEffect } from "react";
import { cms } from "../../cms";

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);
  return (
    <section 
      id="header" 
      className="overlay-bg"
      style={{backgroundImage: cms.header.backGroundImage}}
    >
      <Navbar />
      <div className="content">
        <div className="container">
          <h1 className={`title ${loaded && "loaded"}`}>
            {cms.header.title.map((el) => 
              el.hasColor 
              ? <span className="text-second" key={el.id}>{el.letter}</span>
              : <span key={el.id}>{el.letter}</span>
            )}
          </h1>
          <p className="slogan">
            {cms.header.slogan}
          </p>
          <a href={cms.header.button.link}> <button className="btn second bold">{cms.header.button.title}</button></a>
        </div>
      </div>
      <style jsx>{`
        #header {
          position: relative;
          min-height: 100vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #header .content {
          padding-top: 50px;
          position: relative;
          z-index: 1;
          max-width: 800px;
          text-align: center;
        }
        #header .content .title {
          color: #fff;
          font-family: Exo_Black;
          text-transform: uppercase;
          font-size: 90px;
          margin-bottom: 20px;
        }
        #header .content .title span {
          position: relative;
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }
        #header .content .title span:nth-of-type(odd) {
          top: -50px;
        }
        #header .content .title span:nth-of-type(even) {
          bottom: -50px;
        }
        #header .content .title.loaded span:nth-of-type(odd) {
          top: 0;
          opacity: 1;
        }
        #header .content .title.loaded span:nth-of-type(even) {
          bottom: 0;
          opacity: 1;
        }
        #header .content .slogan {
          color: #fff;
          text-transform: uppercase;
          font-size: 16px;
          letter-spacing: 3px;
          font-family: Worksans_Light;
          margin-bottom: 30px;
          transition: transform 0.2s;
        }
        
        #header .content .slogan:hover {
          transform: scale(1.1);
        }
        
        }
        @media (max-width: 638px) {
          #header .content .title {
            font-size: 70px;
          }
          #header .content .slogan {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
