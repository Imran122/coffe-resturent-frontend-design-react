import { motion } from "framer-motion";
import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import arrow from "../assets/images/mid-section/line.png";
import {
  default as image1,
  default as image3,
} from "./../assets/images/recipe/image1.png";
import image2 from "./../assets/images/recipe/image2.png";
import image4 from "./../assets/images/recipe/image4.jpg";
import image5 from "./../assets/images/recipe/image5.jpg";

export default function TestReceipe() {
  const images = [image1, image2, image3, image4, image5];
  const totalImages = images.length;
  const [startIndex, setStartIndex] = useState(0);

  const clickButton = (direction) => {
    if (direction === "left") {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? totalImages - 1 : prevIndex - 1
      );
    } else {
      setStartIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }
  };
  console.log(startIndex);
  return (
    <div className="bg-primary_background py-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-8 gap-4">
          <div className="col-span-3 md:mb-0 mb-5">
            <div className="flex gap-6 items-center py-4">
              <img className="h-[2px]" src={arrow} alt="arrow" />
              <p className="text-secondary_text font-secondary_font text-xl lg:text-left text-center">
                New Receipe
              </p>
            </div>
            <h2 className="lg:text-5xl md:text-4xl sm:text-3xl font-secondary_font text-primary_text lg:text-left text-center">
              Taste Our New Recipe
            </h2>
            <p className="normal-text-design lg:py-4 leading-5">
              Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
              malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
              porttitor scelerisque amet dolor et. Nisi ac vitae tortor
              lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
              nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing
              eu sit ornare imperdiet viverra sit vel. There are many variations
              of passages of Lorem Ipsum form any injected humour, or randomised
              words which dont look slightly believable.
            </p>
            <div className="flex gap-3 mt-10">
              <p
                onClick={() => clickButton("left")}
                className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-secondary_colour text-secondary_text cursor-pointer"
              >
                <FaLongArrowAltLeft className="text-lg font-thin" />
              </p>
              <p
                onClick={() => clickButton("right")}
                className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-secondary_colour text-secondary_text cursor-pointer"
              >
                <FaLongArrowAltRight className="text-lg font-thin" />
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-5 flex gap-3"
          >
            {images.slice(startIndex, startIndex + 3).map((image, index) => (
              <div key={index} className="group relative">
                <img src={image} alt={`image${startIndex + index + 1}`} />
                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white items-center justify-start px-7 rounded-2xl">
                  <ul className="list-disc">
                    <li className="md:text-sm text-xs">Thinly sliced meat</li>
                    <li className="md:text-sm text-xs">Pita bread or wraps</li>
                    <li className="md:text-sm text-xs">
                      Toppings: tomatoes, tahini sauce, etc.
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
