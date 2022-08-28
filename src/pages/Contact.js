import React, { useState } from "react";
import './Contact.css';
import  'emailjs-com';


const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () =>{
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email.match(regex)) {
      mail.style.display = 'none';
      return true;
    }else{
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(()=>{
        mail.style.animation = 'none';
      }, 1000)
      return false
    }
  }
  const sucessMessage = () =>{
    let fromMess = document.querySelector('.form-message');
    fromMess.innerHTML = 'Merci nous vous contacterez le plutôt possible';
    fromMess.style.opacity = '1';
    fromMess.style.color = 'rgb(101, 247, 3)';

    document.getElementById('name').classList.remove('error');
    document.getElementById('phone').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(()=>{
      fromMess.style.opacity = '0';
    },1500);
  }

    const failMessage = (messages) =>{
      let fromMess = document.querySelector('.form-message');
      fromMess.innerHTML = messages;
      fromMess.style.opacity = '1';
      fromMess.style.color = '#ff4d4d';

      document.getElementById('name').classList.add('error');
      document.getElementById('phone').classList.add('error');
      document.getElementById('email').classList.add('error');
      document.getElementById('message').classList.add('error');
    }

    

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name && isEmail() && message){
      sendFeedback("template_a8d6ou7", {
        name,
        phone,
        email,
        message,
      });
    } else{
      failMessage('Merci de bien vouloir remplir les champs avec *');
    };
    }
    

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_5hsnflh", templateId, variables)
      .then((res) => {
        sucessMessage();
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");        
      })
      .catch(
        (err) =>{
          failMessage("Une erreur s'est produite, veuillez réessayer.")
        })
  };

  return (
    <form className="contact-form">
      <h2>Contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <div className="form-message"></div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      
    </form>
  );
};

export default App;

