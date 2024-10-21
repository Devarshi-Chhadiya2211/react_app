import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message || !mobileNumber) {
      return toast.error("Please complete the form above");
    }
    setLoading(true);

    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      mobileNumber: mobileNumber,
      to_email: "devarshichhadiya@gmail.com",
    };


    emailjs.sendForm("service_o0udr9a", "template_57pvb4p", form.current, "QSE0yIE_tIf8yHhyb")
      .then(
        () => {
          setLoading(false);
          toast.success("Successfully sent email.");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setMobileNumber("");  // Reset mobile number field
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
          toast.error("Error in sending email: " + (error.text || error));
        }
      );
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>
        <ToastContainer />
        <form ref={form} onSubmit={submitHandler}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>

          <div className="input-box">
            <input
              type="tel"
              name="mobile"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
            />
            <input
              type="text"
              name="subject"
              value={subject}
              placeholder="Email Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            value={message}
            cols="30"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          />
          <input
            type="submit"
            value={loading ? "Sending..." : "Send Message"}
            className="btn"
            disabled={loading}
          />
        </form>
      </section>
    </>
  );
}

export default Contact;
