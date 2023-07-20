import React from "react";
import { cms } from "../../cms";

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
        window.pageYOffset >= this.aboutSection?.current?.offsetTop - 100 &&
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
              <h2 className="main-title">{cms?.about.title}</h2>
              {cms.about.infos.map((el) => 
                <div key={el.id}>
                  <p><strong className="sub-title-about">{el.title}</strong></p>
                  <p>{el.text}</p>
                </div>
              )}
              <a href={cms?.about.linkWhatsapp}> <button className="btn first">Fale conosco</button></a>
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
