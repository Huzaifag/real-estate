import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3996000c-ea71-4e18-ba23-0c23dfb17c15");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }} // Initial animation properties
      transition={{ duration: 1 }} // Animation duration
      whileInView={{ opacity: 1, x: 0 }} // Animation properties when in view
      viewport={{ once: true }} // Run the animation only once
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden ' id='contact-us'>
       <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>with Us</span></h1>
       <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Get in touch with us to learn more about our services and how we can help you find your dream home</p>
       <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
              Your Name
              <input type="text" className='w-full border border-gray-300 py-3 px-4 mt-2 rounded' name='Name' placeholder='Your Name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
              Your Email
              <input type="email" className='w-full border border-gray-300 py-3 px-4 mt-2 rounded' name='Email' placeholder='Your Email' required/>
            </div>
          </div>
          <div className='my-6 text-left'>
            Message 
            <textarea className='w-full border border-gray-300 py-3 px-4 mt-2 h-48 rounded resize-none' name="Message" placeholder='Message' required></textarea>
          </div>
          <button className='bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition duration-300'>
            {result ? result : "Send Message"}
          </button>
       </form>
    </motion.div>
  )
}

export default Contact