import Info from "./Info";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="main-title">Fale conosco</h2>
        <p className="main-slogan">estamos aqui para tirar todas as suas duvidas</p>
        <div className="row">
          <div className="info second-bg">
            <Info icon="static/images/whatsapp.svg" text="+55 11 91064 7113" />
            <Info
              icon="static/images/placeholder.svg"
              text="São Paulo"
            />
            <Info icon="static/images/email.svg" text="contato@nitechacademy.com.br" />
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
