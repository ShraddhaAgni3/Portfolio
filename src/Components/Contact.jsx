import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/aqomykza", data);
      toast.success("Your message has been sent");
      reset(); 
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container px-4 md:px-20 my-16">
     
      
      <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
      <p className="text-base mb-6">Please fill out the form below to contact me</p>
      
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-full max-w-md px-6 py-8 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Send Your Message</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              rows="5"
              placeholder="Type your message here"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 mt-3 w-[80px]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
