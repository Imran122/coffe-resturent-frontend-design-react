import image from "../assets/images/chef/Image.png";
import image2 from "../assets/images/chef/Image2.png";
import image3 from "../assets/images/chef/Image3.png";
import image4 from "../assets/images/chef/Image4.png";
import image5 from "../assets/images/chef/Image5.png";
import arrow from "../assets/images/mid-section/line.png";
export default function ShowCase() {
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
          <li className="border border-secondary_colour rounded-full py-3 px-3 text-secondary_text">
            All
          </li>
          <li>Burger</li>
          <li>Drinks</li>
          <li>Pizza</li>
          <li>Dinner</li>
          <li>Lunch</li>
          <li>Cookies</li>
          <li>Backey</li>
        </ul>
        {/*  image section design */}
        <div className="grid grid-cols-12 gap-6 py-4">
          <div className="col-span-4">
            <img className="w-full h-80" src={image} />
          </div>
          <div className="col-span-8">
            <img className="w-full h-80" src={image2} />
          </div>
          <div className="col-span-3">
            <img className="w-full h-80" src={image3} />
          </div>
          <div className="col-span-5">
            <img className="w-full h-80" src={image4} />
          </div>
          <div className="col-span-4">
            <img className="w-full h-80" src={image5} />
          </div>
        </div>
      </div>
    </div>
  );
}
