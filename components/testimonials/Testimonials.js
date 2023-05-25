import Slider from "react-slick";
import Head from "next/head";
import Comment from "./Comment";

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
        <h2 className="main-title">Nosso time</h2>
        <p className="main-slogan">
          Onde está composta nossa equipe!
        </p>

        <Slider {...settings}>
          <Comment 
            name="Nize Costa"
            text="Não espere por oportunidades, crie-as você mesmo."
            image="/static/images/equipe/nize.png"
          />
          <Comment 
            name="Whandell Maior"
            text="A vida é uma jornada, aproveite a viagem. "
            image="/static/images/equipe/whandell.png"
          />
          <Comment 
            name="José Castro"
            text="Não tenha medo do fracasso. Tenha medo de não tentar. "
            image="/static/images/equipe/jose.jpg"
          />
          <Comment 
            name="Alisson Siqueira"
            text="O sucesso é a soma dos pequenos esforços repetidos dia após dia. "
            image="/static/images/equipe/alisson.jpg"
          />
          <Comment 
            name="Aislan Galdino"
            text="Um pequeno passo a cada dia pode te levar a grandes conquistas."
            image="/static/images/equipe/aislan.jpg"
          />
            <Comment 
            name="Alan Carvalho"
            text="A vida é curta, faça cada dia valer a pena."
            image="/static/images/equipe/alan.jpg"
          />
          <Comment 
            name="Arlete Medeiros"
            text="Acreditar em si mesmo é o primeiro passo para alcançar seus objetivos."
            image="/static/images/equipe/arlete.png"
          />
           <Comment 
            name="Fabiana Macedo"
            text="Nunca é tarde demais para ser o que você poderia ter sido"
            image="/static/images/equipe/fabi.jpg"
          />
           <Comment 
            name="Isis de Oliveira"
            text="A vida é como uma câmera, foque no positivo, capture momentos bons e desenvolva-os."
            image="/static/images/equipe/Isis.png"
          />
           <Comment 
            name="Rivaldo Guimarães"
            text="Não basta ter talento, é preciso ter persistência para alcançar o sucesso."
            image="/static/images/equipe/rivaldo.png"
          />
          <Comment 
            name="Willams Elias"
            text="Sucesso é a realização progressiva a um ideal de valor."
            image="/static/images/equipe/Williams.jpeg"
          />
           <Comment 
            name="Roberta Abreu"
            text="Acredite em si mesmo e faça acontecer."
            image="/static/images/equipe/roberta.png"
          />
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
