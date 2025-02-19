import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center border-t pt-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            voluptatum error sunt aliquid ducimus voluptatibus porro dolore
            nulla. Assumenda deleniti impedit libero officia aut reprehenderit
            cum incidunt reiciendis molestiae architecto! Quis recusandae alias
            consectetur ducimus nihil neque. Dolores optio omnis, quasi eum aut
            enim reprehenderit libero, vel debitis exercitationem cumque, fugit
            ad non eveniet. Tempore magnam earum aliquam explicabo alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            obcaecati ipsum provident odio perferendis quidem nam numquam animi
            repellendus dolor error quibusdam enim deserunt aliquam tempora,
            ullam amet? Ullam, nam.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            mollitia ratione quae quo aliquam porro numquam nisi eius, eaque
            molestias rem officia libero sapiente adipisci asperiores illo
            laboriosam doloremque hic.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
            dolorem qui, corrupti vero distinctio earum impedit. Facilis sit
            enim veritatis perspiciatis, id aperiam debitis, quod modi animi
            excepturi saepe!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
            dolorem qui, corrupti vero distinctio earum impedit. Facilis sit
            enim veritatis perspiciatis, id aperiam debitis, quod modi animi
            excepturi saepe!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
            dolorem qui, corrupti vero distinctio earum impedit. Facilis sit
            enim veritatis perspiciatis, id aperiam debitis, quod modi animi
            excepturi saepe!
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
