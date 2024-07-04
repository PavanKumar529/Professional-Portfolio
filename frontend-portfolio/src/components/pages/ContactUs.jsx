import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage, AiOutlinePhone } from 'react-icons/ai';
import axios from 'axios';

const ContactUs = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobileNumber: '',
    description: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    description: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: '',
      email: '',
      mobileNumber: '',
      description: ''
    };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required';
      valid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Mobile number is invalid';
      valid = false;
    }

    if (!formData.description.trim()) {
      errors.description = 'Message is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Clear validation error for the current field when user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('https://professional-portfolio-40e3.onrender.com/register', formData);
      if (response.data.success) {
        setStatusMessage('Message sent successfully!');
        setFormData(initialFormData); // Clear form fields
      } else {
        setStatusMessage('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatusMessage('Error sending message.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="shadow-xl rounded-lg flex flex-col md:flex-row p-6 md:p-12 lg:p-16 w-full max-w-5xl text-gray-100 h-full">
        {/* Left Side Content */}
        <div className="md:w-1/2 md:pr-8 lg:pr-12 mb-8 md:mb-0">
          {/* <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h2> */}
          <h1 className="text-center text-4xl sm:text-5xl font-bold text-purple-400 mb-4">
              Get in <span className="text-yellow-400">Touch</span>
            </h1>
          <p className="mb-8 text-lg">
            I would love to hear from you! Whether you have a question about features, trials, pricing, need a demo, or anything else, my team is ready to answer all your questions.
          </p>
          <p className="mb-4 text-lg">
            <AiOutlineMail className="inline-block mb-1 mr-2 text-purple-500" /> pavankumarkuruva529@gmail.com
          </p>
          <p className="mb-8 text-lg">
            <AiOutlinePhone className="inline-block mb-1 mr-2 text-purple-500" /> +91 8328533863
          </p>
          <p className="mb-8 text-lg">
            Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/pavan-kumar529/" className="text-purple-500 hover:underline" target="_blank" rel="noopener noreferrer">@Pavan Kumar Kuruva</a>
          </p>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center border-b border-gray-300 py-2">
              <AiOutlineUser className="text-gray-100 mr-3" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none text-lg ${formErrors.name ? 'border-red-500' : ''}`}
              />
            </div>
            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            <div className="flex items-center border-b border-gray-300 py-2">
              <AiOutlineMail className="text-gray-100 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none text-lg ${formErrors.email ? 'border-red-500' : ''}`}
              />
            </div>

            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            <div className="flex items-center border-b border-gray-300 py-2">
              <AiOutlinePhone className="text-gray-100 mr-3" />
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Your Mobile Number"
                className={`appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none text-lg ${formErrors.mobileNumber ? 'border-red-500' : ''}`}
              />
            </div>

            {formErrors.mobileNumber && <p className="text-red-500 text-sm mt-1">{formErrors.mobileNumber}</p>}
            <div className="flex items-center border-b border-gray-300 py-2">
              <AiOutlineMessage className="text-gray-100 mr-3" />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Your Message"
                className={`appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none h-10 text-lg ${formErrors.description ? 'border-red-500' : ''}`}
              ></textarea>
            </div>
            
            {formErrors.description && <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
          {statusMessage && (
            <p className="text-center text-green-600 mt-4">{statusMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
