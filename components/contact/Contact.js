import Info from "./Info";
import ContactForm from "./ContactForm";
import { cms } from "../../cms";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="main-title">{cms.about.title}</h2>
        <p className="main-slogan">{cms.contact.subTitle}</p>
        <div className="row">
          <div className="info second-bg">
            {cms.contact.infos.map((el) =>
              <Info
                icon={el.icon}
                text={el.text}
                key={el.id}
              />
            )}
          </div>

          <ContactForm />
        </div>
      </div>
      <style jsx>
        {`
          #contact .row {
            display: flex;
            flex-direction: column;
          }
          #contact .row .info {
            display: flex;
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
          }
          @media (max-width: 830px) {
            #contact .row .info {
              flex-direction: column;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
