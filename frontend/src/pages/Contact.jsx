import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title Text1={"CONTACT"} Text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600 ">Our Store </p>
          <p className="text-gray-500">12345 abc Station <br /> suite 345 Addiss Abeba , Ethiopia</p>
          <p className="text-gray-500">Tel: +251 25 85 78 10 <br />Email: josefdagne5@gmail.com</p>
          <p>Careers at .... </p>
          <p className="text-gray-500">Learn more about our teams and job openings</p>
          <p></p>

        </div>
      </div>
    </div>
  );
};

export default Contact;
