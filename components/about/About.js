import React, { useState, useEffect } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.aboutSection = React.createRef();
  }
  state = {
    scrolled: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (
        window.pageYOffset >= this.aboutSection.current.offsetTop - 100 &&
        !this.state.scrolled
      ) {
        this.setState({
          scrolled: true,
        });
      }
    });
  }
  render() {
    return (
      <section id="about" ref={this.aboutSection}>
        <div className="container">
          <div className="row">
            <div className={this.state.scrolled ? "img-o scrolled" : "img-o"}>
              <div className="containerVideo">
                <iframe className="iframe-video"
                  src="https://www.youtube.com/embed/fn6eMqwK0Ik?controls=1"
                >
                </iframe>
              </div>
            </div>
            <div className="text">
              <h2 className="main-title">Nós somos a NITECH</h2>
              <p>
                <strong className="sub-title-about">Sobre a Nitech</strong>
              </p>
              <p>
                Temos As melhores práticas 
                de programação para construir o seu 
                produto ou serviço. Conte conosco para desenhar soluções digitais 
                inovadoras e planejar seu sistema.
              </p>
              <p>
                <strong className="sub-title-about">O que fazemos?</strong>
              </p>
              <p>
                Desenvolvemos soluções digitais. Simplificamos a tecnologia para que 
                você possa ter sua inovação. Conheça nossos serviços e descubra como 
                podemos lhe ajudar.
              </p>
              <p>
                <strong className="sub-title-about">Como fazemos?</strong>
              </p>
              <p>
                Com agilidade e tecnologia para transformar a sua ideia em software. 
                Nosso time multidisciplinar está pronto para conceber e desenvolver o 
                seu produto ou serviço digital.
              </p>
              <a href="https://wa.me/5511910647113"> <button className="btn first">Fale conosco</button></a>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            #about .row {
              display: flex;
              align-items: center;
            }
            #about .row .text,
            #about .row .img-o {
              flex-basis: 50%;
            }
            #about .row .text {
              padding-right: 50px;
              margin-left: 50px;
            }
            #about .row .text .main-title {
              text-align: left;
              color: #7503A6;
              margin-bottom: 40px;
            }
            #about .row .text p {
              margin-bottom: 10px;
            }
            #about .row .text p:last-of-type {
              margin-bottom: 30px;
            }
            #about .row .img-o {
              text-align: center;
            }
            #about .row .img-o img {
              max-width: 400px;
              position: relative;
              top: 150px;
              opacity: 0;
              transition: all 0.5s ease-in-out;
            }
            #about .row .img-o.scrolled img {
              top: 0;
              opacity: 1;
            }

            @media (max-width: 900px) {
              #about .row {
                flex-direction: column;
              }
              #about .row .text {
                order: 1;
                padding-right: 0;
                margin-bottom: 50px;
                margin-left: 0px;
              }
              #about .row .img-o {
                order: 2;
              }
              #about .row .img-o {
                width: 100%;
              }
              #about .row .text,
              #about .row .text .main-title {
                text-align: center;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default About;
