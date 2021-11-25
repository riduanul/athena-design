import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className=" container mt-5  ">
      <h1 className="font-weight-bold">Get your design right, right now</h1>
      <p>Be the first know our latest offers and updates!</p>
      <div class=" ml-auto mr-auto contact-input d-flex">
        <input
          type="text"
          class="  text-center border-0 "
          placeholder="Enter your email address"
        />

        <button class="contact-btn" type="button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
