import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import banner4 from "../assets/images/banner/banner3.png";
import banner5 from "../assets/images/banner/banner4.png";
import cupbanner from "../assets/images/banner/bannerimg.png";
import icon1 from "../assets/images/banner/cup1.png";
import icon2 from "../assets/images/banner/cup2.png";
import icon3 from "../assets/images/banner/cup3.png";
import flowerbottom from "../assets/images/banner/flower-bottom.png";
import flowerleft from "../assets/images/banner/flower-left.png";
import flowerright from "../assets/images/banner/flower-right.png";
export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming there are three slides, change the value accordingly if there are more slides
    }, 5000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* bg images */}
      <div className="absolute left-0 top-0">
        <img src={flowerleft} />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <img src={flowerbottom} />
      </div>
      <div className="absolute right-0 bottom-0 -z-30">
        <img src={flowerright} />
      </div>
      {/* bg images */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="border-l border-[#D9D9D9] container lg:mx-auto lg:grid lg:grid-cols-8 gap-4 px-16 py-28"
      >
        {currentIndex === 0 && (
          <>
            <div className="col-span-4">
              <h4 className="font-bold font-secondary_font text-lg text-primary_text lg:py-4">
                WELCOME TO OUR
              </h4>
              <h2 className=" font-normal font-secondary_font text-primary_text lg:text-8xl md:text-5xl text-4xl leading-[124px] lg:py-4">
                unlocklive
              </h2>
              <h3 className=" font-normal font-secondary_font text-primary_text text-3xl mb-4">
                Elevating Your Coffee Experience
              </h3>
              <p className="normal-text-design lg:py-4">
                Unlocklive embodies our commitment to transforming the simple
                act of sipping coffee into a refined and memorable journey. At
                Epicurean, we take pride in curating an exceptional coffee
                experience that transcends the ordinary.
              </p>
              <div className="lg:flex gap-10 mt-5">
                <button className="py-4 px-5 text-center bg-secondary_colour rounded-2xl text-white font-third_font_medium">
                  EXPLORE OUR MENU
                </button>

                <div className="lg:flex gap-28 justify-center items-center">
                  <div className="flex relative">
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center">
                      <img src={icon1} />
                    </div>
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center absolute left-8">
                      <img src={icon2} />
                    </div>
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center absolute left-16">
                      <img src={icon3} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg text-primary_colour"> 1200+</h2>
                    <p className="normal-text-design ">Tasty Variant Coffee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <img src={cupbanner} alt="cup" />
            </div>
          </>
        )}
        {currentIndex === 1 && (
          <>
            <div className="col-span-4">
              <h4 className="font-bold font-secondary_font text-lg text-primary_text lg:py-4">
                TEST OUR BEST FOOD
              </h4>
              <h2 className=" font-normal font-secondary_font text-primary_text lg:text-8xl md:text-5xl text-4xl leading-[124px] lg:py-4">
                unlocklive
              </h2>
              <h3 className=" font-normal font-secondary_font text-primary_text text-3xl mb-4">
                Elevating Your Food Experience
              </h3>
              <p className="normal-text-design lg:py-4">
                Food contains nutrients—substances essential for the growth,
                repair, and maintenance.Unlocklive embodies our commitment to
                transforming the simple act of sipping coffee into a refined and
                memorable journey..
              </p>
              <div className="lg:flex gap-10 mt-5">
                <button className="py-4 px-5 text-center bg-secondary_colour rounded-2xl text-white font-third_font_medium">
                  EXPLORE OUR MENU
                </button>

                <div className="lg:flex gap-28 justify-center items-center">
                  <div className="flex relative">
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center">
                      <img src={icon1} />
                    </div>
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center absolute left-8">
                      <img src={icon2} />
                    </div>
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center absolute left-16">
                      <img src={icon3} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg text-primary_colour"> 1200+</h2>
                    <p className="normal-text-design ">Tasty Variant Coffee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <img src={banner4} alt="cup" />
            </div>
          </>
        )}
        {currentIndex === 2 && (
          <>
            <div className="col-span-4">
              <h4 className="font-bold font-secondary_font text-lg text-primary_text lg:py-4">
                TEST DINNER MENU
              </h4>
              <h2 className=" font-normal font-secondary_font text-primary_text lg:text-8xl md:text-5xl text-4xl leading-[124px] lg:py-4">
                unlocklive
              </h2>
              <h3 className=" font-normal font-secondary_font text-primary_text text-3xl mb-4">
                Elevating Your Dinner Experience
              </h3>
              <p className="normal-text-design lg:py-4">
                Dinner usually refers to what is in many Western cultures the
                biggest and most formal meal of the day. Historically, the
                largest meal used to be eaten
              </p>
              <div className="lg:flex gap-10 mt-5">
                <button className="py-4 px-5 text-center bg-secondary_colour rounded-2xl text-white font-third_font_medium">
                  EXPLORE OUR MENU
                </button>

                <div className="lg:flex gap-28 justify-center items-center">
                  <div className="flex relative">
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center">
                      <img src={icon1} />
                    </div>
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center absolute left-8">
                      <img src={icon2} />
                    </div>
                    <div className=" rounded-full w-20 h-20 flex justify-center items-center absolute left-16">
                      <img src={icon3} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg text-primary_colour"> 1200+</h2>
                    <p className="normal-text-design ">Tasty Variant Coffee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <img src={banner5} alt="cup" />
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
/* Ellipse 1550 */
