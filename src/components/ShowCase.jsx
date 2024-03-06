import { LazyMotion, domAnimation, motion } from "framer-motion";
import { useState } from "react";
import image from "../assets/images/chef/Image.png";
import image2 from "../assets/images/chef/Image2.png";
import image3 from "../assets/images/chef/Image3.png";
import image4 from "../assets/images/chef/Image4.png";
import image5 from "../assets/images/chef/Image5.png";
import arrow from "../assets/images/mid-section/line.png";
export default function ShowCase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [numImages, setNumImages] = useState(2); // Initially show 2 images

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setNumImages(2); // Reset number of images to display to 2
  };

  // Filter images based on selected category
  const filteredImages = () => {
    switch (selectedCategory) {
      case "All":
        return [image, image2, image3, image4, image5];
      case "Burger":
        return [image, image2];
      case "Drinks":
        return [image2, image3];
      case "Pizza":
        return [image, image3, image4];
      case "Dinner":
        return [image4, image5];
      case "Lunch":
        return [image5, image, image2];
      default:
        return [];
    }
  };
  return (
    <div className="container mx-auto px-2 py-10">
      <div className="flex flex-col gap-3 justify-center items-center py-4 px-2">
        <p className="text-secondary_text font-secondary_font text-xl lg:text-left text-center">
          SHOWCASE
        </p>
        <img className="h-[2px] rotate-180" src={arrow} />
        <h3 className="lg:text-5xl md:text-4xl sm:text-3xl font-secondary_font text-primary_text lg:text-left text-center">
          Our Chefs New Creations
        </h3>
        <p className="normal-text-design md:w-96 text-justify">
          Behold the extraordinary creations born from the synergy of our users
          ingenuity and the transformative power of AI, a testament to boundless
          innovation.
        </p>
      </div>

      <div>
        <ul className="flex flex-wrap gap-6 justify-center items-center py-4">
          <li
            className={`${
              selectedCategory === "All" &&
              "border border-secondary_colour rounded-full py-3 px-3 text-secondary_text cursor-pointer"
            }`}
            onClick={() => handleCategorySelect("All")}
          >
            All
          </li>
          {/* Add onClick handlers to other category items */}
          {/* For example: */}
          <li
            className={`${
              selectedCategory === "Burger" &&
              "border border-secondary_colour rounded-full py-3 px-3 text-secondary_text cursor-pointer"
            }`}
            onClick={() => handleCategorySelect("Burger")}
          >
            Burger
          </li>
          <li
            className={`${
              selectedCategory === "Drinks" &&
              "border border-secondary_colour rounded-full py-3 px-3 text-secondary_text cursor-pointer"
            }`}
            onClick={() => handleCategorySelect("Drinks")}
          >
            Drinks
          </li>
          <li
            className={`${
              selectedCategory === "Pizza" &&
              "border border-secondary_colour rounded-full py-3 px-3 text-secondary_text cursor-pointer"
            }`}
            onClick={() => handleCategorySelect("Pizza")}
          >
            Pizza
          </li>
          <li
            className={`${
              selectedCategory === "Dinner" &&
              "border border-secondary_colour rounded-full py-3 px-3 text-secondary_text cursor-pointer"
            }`}
            onClick={() => handleCategorySelect("Dinner")}
          >
            Dinner
          </li>
          <li
            className={`${
              selectedCategory === "Lunch" &&
              "border border-secondary_colour rounded-full py-3 px-3 text-secondary_text cursor-pointer"
            }`}
            onClick={() => handleCategorySelect("Lunch")}
          ></li>
        </ul>
        {/*  image section design */}
        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-12 gap-6 py-4">
            {filteredImages().map((img, index) => (
              <div
                key={index}
                className={`${index === 0 && "col-span-4"} 
              ${index === 1 && "col-span-8"} 
                ${index === 2 && "col-span-3"} 
                ${index === 3 && "col-span-5"} 
              ${index === 4 && "col-span-4"}`}
              >
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: index + 40,
                    damping: index + 20,
                  }}
                  className="w-full h-80"
                  src={img}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </LazyMotion>
      </div>
    </div>
  );
}
