import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex justify-center flex-col md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full md:max-w-[420px] justify-center" />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">54709 Williams Station <br />Suite, 350, Washington, USA</p>
          <p className="text-gray-500"> Tel:(415) 555-0312 <br />Email: admin@forever.com</p>
          <p className="text-xl font-semibold text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">Learn more about our jop openings and work culture</p>
          <button className="border border-black px-8 py-4 text-sm 
          hover:bg-black hover:text-white transition-all duration-500">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
