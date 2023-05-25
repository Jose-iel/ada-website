import React, { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (name === "" || email === "" || message === "" ) {
      window.alert("Os campos precisam ser preenchidos")
      return;
    }

    let url = "https://wa.me/5511910647113?text="
          + "*Formulário de Contato Nitech*" + "%0a"
          + "%0a"
          + "*Nome*: " + name + "%0a"
          + "*E-Mail*: " + email + "%0a"
          + "*Mensagem*: " + message;
  
    window.open(url, '_blank').focus();
  }

  return (
    <form className="dark-bg">
      <h2>enviar mensagem</h2>
      <div className="two-inputs">
        <div className="input-wrap two-inputs">
          <input 
            type="text" 
            placeholder="Nome*" 
            className="capt" 
            onChange={ev => setName(ev.target.value)}
          />
        </div>
        <div className="input-wrap">
          <input 
            type="text" 
            placeholder="E-mail*" 
            onChange={ev => setEmail(ev.target.value)}
          />
        </div>
      </div>
      <div className="input-wrap">
        <textarea 
          placeholder="Mensagem*"
          onChange={ev => setMessage(ev.target.value)}
        ></textarea>
      </div>
      <div className="submit-wrap">
        <input type="submit" value="enviar" className="btn second" onClick={handleSendMessage}/>
      </div>
      <style jsx>
        {`
          form {
            flex-basis: 60%;
            padding: 80px 100px;
            border-bottom-right-radius: 50px;
            border-bottom-left-radius: 50px;
          }
          form h2 {
            color: #fff;
            margin-bottom: 40px;
          }
          @media (max-width: 900px) {
            form {
              padding: 50px;
            }
          }
          @media (max-width: 700px) {
            form {
              padding: 40px;
            }
          }
        `}
      </style>
    </form>
  );
};

export default ContactForm;
