import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Q6LqFKlXfTk4agh4w
// template_9mbrt1s
// service_8yom89b


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setIsLoading] = useState(false);
  
  const handleChange = (e) => { 
    const { name, value } = e.target;

    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_8yom89b',
      'template_9mbrt1s',
      {
        from_name: form.name,
        to_name: 'Mohammad',
        from_email: form.email,
        to_email: 'contact@creatordev.pro',
        message: form.message
      },
      'Q6LqFKlXfTk4agh4w'
    )
      .then(() => { 
        setIsLoading(false);
        alert('Thank you. I will get back to you as soon as possible.')

        setForm({
          name: '',
          email: '',
          message: '',
        }, (error) => {
          setIsLoading(false);

          console.log(error);

          alert('something went wrong');
        })
      });
   }

  return ( 
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl flex-[0.80]"
      >
        <p className={styles.sectionSubText}>
          Get in Touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">  
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary focus:bg-purple-800/15 text-white 
              rounded-lg outline-none border-none font-medium"
              />
            </label>
          <label className="flex flex-col">  
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
              rounded-lg outline-none border-none font-medium focus:bg-purple-800/15"
              />
            </label>
          <label className="flex flex-col">  
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary focus:bg-purple-800/15 text-white 
              rounded-lg outline-none border-none font-medium"
              />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none rounded-xl w-fit text-white font-bold shadow-md shadow-primary"
            onSubmit={handleSubmit}
          >
            Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
   );
}
 
export default SectionWrapper(Contact,"contact");