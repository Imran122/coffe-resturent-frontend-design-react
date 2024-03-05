import cup from "../assets/images//mid-section/midcup.png";
import cupbg from "../assets/images/mid-section/Vector.png";
import arrow from "../assets/images/mid-section/line.png";
export default function WhyChooseUs() {
  return (
    <div className="relative px-4">
      <img className="absolute top-0 right-0" src={cupbg} />
      <div className="container mx-auto lg:grid lg:grid-cols-9 gap-10">
        <div className="col-span-6 ">
          <div className="flex gap-6 items-center py-4">
            <img className="h-[2px]" src={arrow} />
            <p className="text-secondary_text font-secondary_font text-xl lg:text-left text-center">
              why choose us
            </p>
          </div>
          <h2 className="text-5xl font-secondary_font text-primary_text lg:text-left text-center">
            Choosing Unlocklive, A Taste of Perfection
          </h2>
          <p className="normal-text-design py-4 leading-8 text-justify">
            Unlocklive takes pride in the art of roasting, transforming raw
            coffee beans into a symphony of aromatic notes and rich flavors.
          </p>

          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-6">
            <div className="col-span-2 border border-[#D9D9D9] flex flex-col justify-center items-center py-10 rounded-lg">
              <h2 className="text-4xl font-fourth_font_abril font-bold  text-primary_text">
                20+
              </h2>
              <h3 className="text-xl font-fourth_font_abril text-primary_text">
                Years Experience
              </h3>
            </div>
            <div className="col-span-2 border border-[#D9D9D9] flex flex-col justify-center items-center py-10 rounded-lg relative">
              <h2 className="text-4xl font-fourth_font_abril font-bold  text-primary_text">
                100+
              </h2>
              <h3 className="text-xl font-fourth_font_abril text-primary_text">
                Master Chefs
              </h3>
              {/* Extra border */}
              <div className="absolute inset-0 border-2 border-[#D9D9D9] rounded-lg pointer-events-none transform rotate-3"></div>
            </div>
            <div className="col-span-2 border border-[#D9D9D9] flex flex-col justify-center items-center py-10 rounded-lg">
              <h2 className="text-4xl font-fourth_font_abril font-bold  text-primary_text">
                30+
              </h2>
              <h3 className="text-xl font-fourth_font_abril text-primary_text">
                Achievements
              </h3>
            </div>
          </div>
          <p className="normal-text-design py-4 leading-8 text-justify">
            Your choice to savor our coffee is an invitation to experience the
            epitome of craftsmanship, flavor, and dedication.
          </p>
          <button className="mb-4 py-4 px-5 text-center bg-transparent border border-secondary_colour rounded-2xl text-secondary_text font-third_font_medium hover:bg-secondary_colour hover:text-white">
            EXPLORE OUR MENU
          </button>
        </div>

        <div className="col-span-3 ">
          <div className="mid-sec w-full  flex justify-center items-center pb-4">
            <img className="w-[450px]  " src={cup} />
          </div>
        </div>
      </div>
    </div>
  );
}
