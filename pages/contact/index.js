//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

//useState
import { useState } from "react";

//react hot toast
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Define formData from state
    const formData = {
      name,
      email,
      subject,
      message,
    };

    // Wrap the fetch call in toast.promise
    const promise = toast.promise(
      fetch("/api/sendMailTrigger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(async (response) => {
        if (response.ok) {
          // If the response status is in the range 200-299
          const data = await response.json();
          // Clear form fields after successful submission

          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          return data.message; // Resolve the promise with success message
        } else {
          // If the response status is not in the range 200-299
          const errorMessage = await response.text();
          throw new Error(errorMessage); // Reject the promise with error message
        }
      }),
      {
        loading: "Sending...", // Loading message while sending
        success: <b> 🚀 Got you message! 🎉 </b>, // Success message
        error: <b>Failed to send email.</b>, // Error message
      }
    );

    // Handle promise errors
    promise.catch((error) => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.error("Error sending email:", error);
    });
  };

  return (
    <div className="h-full bg-primary/30 xl:mt-0 -mt-1">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full ">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h2 text-center xl:mb-12 mb-3 mt-3"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 w-full mx-auto z-10"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                className="input"
              />
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="input"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="input"
            />
            <textarea
              placeholder="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
              className="textarea"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
