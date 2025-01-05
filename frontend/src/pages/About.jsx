import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title Text1={"ABOUT"} Text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolore, animi non, hic laborum similique perspiciatis expedita
            tenetur sapiente vero recusandae. Doloremque facere ipsa nostrum
            aspernatur praesentium ad dolores ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repellendus facere dolores vero eos eligendi quod cum rem est
            voluptates nisi quisquam fugiat praesentium corporis quae provident
            optio, obcaecati voluptate.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            at doloribus, perspiciatis quod, asperiores vel enim, amet
            blanditiis exercitationem maxime voluptates debitis dolorem tenetur
            alias nobis accusantium ex nesciunt saepe!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title Text1={"WHY"} Text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
