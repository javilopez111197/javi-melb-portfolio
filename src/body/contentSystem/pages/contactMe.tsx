import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "./contactMe.scss";

export const ContactMe = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8wq3gcw",
        "template_pmplyso",
        e.currentTarget,
        "339YZV9c3wqLV_-4k"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error: any) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
  return (
    <>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Company Name"
          required
        />
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send</button>
      </form>
      <ToastContainer />
    </>
  );
};
export default ContactMe;
