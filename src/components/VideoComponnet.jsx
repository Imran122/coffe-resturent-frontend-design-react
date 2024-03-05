import { FaPlay } from "react-icons/fa";
import arrow from "../assets/images/video/video.png";

export default function VideoComponnet() {
  return (
    <div className="w-full bg-primary_background mb-28">
      <div className="container mx-auto md:grid md:grid-cols-8 flex flex-col  gap-4 justify-center items-center">
        <div className="lg:col-span-2 md:col-span-4 lg:-mb-10 ">
          <div className="bg-secondary_colour w-[319px] h-[326px] flex flex-col justify-center items-center">
            <img src={arrow} />
            <div className="flex gap-4 justify-center items-center mt-10">
              <p className="py-4 px-4 rounded-full border-2 border-white text-white">
                <FaPlay />
              </p>
              <h2 className="font-fourth_font_abril text-white text-lg">
                Play Intro Video
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-4 text-center lg:border-r border-[#D9D9D9]">
          <h2 className="medium-title-text-design ">Our Opening Hours</h2>
          <p className="text-primary_text leading-4 font-fourth_font_abril text-base py-4">
            Mon - Sat: 07:00 - 18:00
          </p>
          <p className="text-primary_text leading-4 font-fourth_font_abril text-base ">
            {" "}
            Only Sun: 09:00 - 14:00
          </p>
        </div>
        <div className="lg:col-span-2 md:col-span-4 text-center md:border-r border-[#D9D9D9]">
          <h2 className="medium-title-text-design ">Our Opening Hours</h2>
          <p className="text-primary_text leading-4 font-fourth_font_abril text-base py-4">
            Mon - Sat: 07:00 - 18:00
          </p>
          <p className="text-primary_text leading-4 font-fourth_font_abril text-base ">
            {" "}
            Only Sun: 09:00 - 14:00
          </p>
        </div>
        <div className="lg:col-span-2 md:col-span-4 text-center">
          <h2 className="medium-title-text-design ">Our Opening Hours</h2>
          <p className="text-primary_text leading-4 font-fourth_font_abril text-base py-4">
            Mon - Sat: 07:00 - 18:00
          </p>
          <p className="text-primary_text leading-4 font-fourth_font_abril text-base ">
            {" "}
            Only Sun: 09:00 - 14:00
          </p>
        </div>
      </div>
    </div>
  );
}
