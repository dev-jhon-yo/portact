import { useState } from 'react';
import emailjs from "@emailjs/browser"
import "./styles.scss"

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_cs32cn8", "template_brxo6er", templateParams, "fhap9MJf6mUoF30sZ")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')

    }, (err) => {
      console.log("ERRO: ", err)
    })
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            praesentium tenetur itaque sapiente dignissimos laborum recusandae
            itaque autem eos non laboriosam aspernatur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            praesentium tenetur itaque sapiente dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            praesentium tenetur itaque sapiente dignissimos.
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail}> 
              <ul>
              <li className="half">
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </li>
                {/* <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    
                  />
                </li> */}
                <li>
                  <textarea
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
