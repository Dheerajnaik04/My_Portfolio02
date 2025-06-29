import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Template parameters for admin email
    const adminTemplateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Dheeraj",
    };

    // Template parameters for confirmation email
    const confirmationTemplateParams = {
      from_name: form.name,
      to_email: form.email,
      message: form.message,
      to_name: form.name,
    };

    // Send admin email
    const sendAdminEmail = emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      adminTemplateParams,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );

    // Send confirmation email
    const sendConfirmationEmail = emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_CONFIRMATION_ID,
      confirmationTemplateParams,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );

    // Handle both emails
    Promise.all([sendAdminEmail, sendConfirmationEmail])
      .then(() => {
        setLoading(false);
        alert(
          `Thank you ${form.name}! 🎉\n\nYour message has been sent successfully.\nYou'll receive a confirmation email shortly.`
        );
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        
        // Fallback: try to send just admin email
        emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          adminTemplateParams,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          alert("Message sent! (Confirmation email may not have been delivered)");
        })
        .catch(() => {
          alert("Failed to send message. Please try again or email me directly at dheerajnaik04@gmail.com");
        });
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'
            } transition-all duration-200`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className='mt-8 text-center'>
          <p className='text-secondary text-sm'>
            ✅ You'll receive a confirmation email after sending
          </p>
          <p className='text-secondary text-xs mt-2'>
            Alternative: <a href="mailto:dheerajnaik04@gmail.com" className='text-white hover:text-[#915EFF]'>dheerajnaik04@gmail.com</a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
