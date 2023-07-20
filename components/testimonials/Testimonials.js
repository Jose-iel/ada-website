import Slider from "react-slick";
import Head from "next/head";
import Comment from "./Comment";
import { cms } from "../../cms";

const Testimonials = () => {
  const settings = {
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerPadding: "200px",
        },
      },
    ],
  };
  return (
    <section
      id="testimonials"
      className="overlay-bg"
      style={{ backgroundImage: `url('static/images/home-bg1.webp')` }}
    >
      <Head>
        <link rel="stylesheet" href="/static/css/slick.min.css" />
        <link rel="stylesheet" href="/static/css/slick-theme.min.css" />
      </Head>
      <div className="container">
        <h2 className="main-title">{cms.team.title}</h2>
        <p className="main-slogan">
          {cms.team.subTitle}
        </p>
        <Slider {...settings}>
          {cms.team.infos.map((el) => 
            <Comment 
              name={el.name}
              text={el.text}
              image={el.image}
              key={el.id}
            />
          )}
        </Slider>
      </div>
      <style jsx>
        {`
          #testimonials {
            position: relative;
            background-size: cover;
            background-position: center;
          }
          #testimonials .container {
            position: relative;
          }
          #testimonials .main-title {
            color: #ccc;
          }
          #testimonials .main-slogan {
            color: #ccc;
          }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
