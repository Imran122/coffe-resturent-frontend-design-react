import image1 from "../assets/images/mid-section/Image.png";
import arrow from "../assets/images/mid-section/line.png";
export default function CoffeMenu() {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="flex gap-6 justify-center items-center py-4">
        <img className="h-[2px]" src={arrow} />
        <p className="text-secondary_text font-secondary_font text-xl lg:text-left text-center">
          Coffee Menu
        </p>
        <img className="h-[2px] rotate-180" src={arrow} />
      </div>
      <h3 className="lg:text-5xl md:text-4xl sm:text-3xl font-secondary_font text-primary_text lg:text-left text-center">
        Unlocklive Coffee Menu
      </h3>
      <div className="container mx-auto lg:grid lg:grid-cols-8 gap-10 py-20">
        <div className="col-span-4 grid grid-cols-12 justify-between items-center border border-[#D9D9D9] rounded-lg py-10 px-6">
          <div className="col-span-8 flex gap-3 justify-center items-center">
            <div className="border-2 border-dotted border-secondary_colour rounded-full md:w-24 md:h-24 w-14 h-14 gap-4 flex justify-center items-center ">
              <div className="bg-gray-200 rounded-full md:w-20 md:h-20 w-12 h-12 flex justify-center items-center ">
                <img src={image1} alt="image" />
              </div>
            </div>
            <div className=" flex flex-col justify-center items-start">
              {" "}
              <h2 className="medium-title-text-design">Double Espresso x2</h2>
              <p className="normal-text-design mt-2 md:w-72 text-justify">
                There are many variations of passages Lorem Ipsum form
              </p>
            </div>
          </div>
          <div className="col-span-4 flex gap-3  justify-center items-center">
            <div>
              <div className="border-2 border-b border-dotted border-[#D1D1D1] md:w-32 w-20"></div>
              <div className="border-2 border-b border-dotted border-[#D1D1D1] md:w-12 w-12 mt-4"></div>
            </div>
            <div className="border-2 border-dotted border-secondary_colour rounded-full md:w-16 md:h-16 w-12 h-12 gap-4 flex justify-center items-center ">
              <div className="bg-secondary_colour rounded-full md:w-12 md:h-12 w-10 h-10 flex justify-center items-center ">
                <h2 className="text-white font-fourth_font_abril font-medium">
                  {" "}
                  $ 10
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-12 justify-between items-center border border-[#D9D9D9] rounded-lg py-10 px-6">
          <div className="col-span-8 flex gap-3 justify-center items-center">
            <div className="border-2 border-dotted border-secondary_colour rounded-full md:w-24 md:h-24 w-14 h-14 gap-4 flex justify-center items-center ">
              <div className="bg-gray-200 rounded-full md:w-20 md:h-20 w-12 h-12 flex justify-center items-center ">
                <img src={image1} alt="image" />
              </div>
            </div>
            <div className=" flex flex-col justify-center items-start">
              {" "}
              <h2 className="medium-title-text-design">
                Salted Caramel Cold Brew
              </h2>
              <p className="normal-text-design mt-2 md:w-72 text-justify">
                There are many variations of passages Lorem Ipsum form
              </p>
            </div>
          </div>
          <div className="col-span-4 flex gap-3  justify-center items-center">
            <div>
              <div className="border-2 border-b border-dotted border-[#D1D1D1] md:w-32 w-20"></div>
              <div className="border-2 border-b border-dotted border-[#D1D1D1] md:w-12 w-12 mt-4"></div>
            </div>
            <div className="border-2 border-dotted border-secondary_colour rounded-full md:w-16 md:h-16 w-12 h-12 gap-4 flex justify-center items-center ">
              <div className="bg-gray-200 rounded-full md:w-12 md:h-12 w-10 h-10 flex justify-center items-center ">
                <h2 className="text-primary_text font-fourth_font_abril font-medium">
                  {" "}
                  $ 10
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-12 justify-between items-center border border-[#D9D9D9] rounded-lg py-10 px-6">
          <div className="col-span-8 flex gap-3 justify-center items-center">
            <div className="border-2 border-dotted border-secondary_colour rounded-full md:w-24 md:h-24 w-14 h-14 gap-4 flex justify-center items-center ">
              <div className="bg-gray-200 rounded-full md:w-20 md:h-20 w-12 h-12 flex justify-center items-center ">
                <img src={image1} alt="image" />
              </div>
            </div>
            <div className=" flex flex-col justify-center items-start">
              {" "}
              <h2 className="medium-title-text-design">
                Hazelnut Heaven Latte
              </h2>
              <p className="normal-text-design mt-2 md:w-72 text-justify">
                There are many variations of passages Lorem Ipsum form
              </p>
            </div>
          </div>
          <div className="col-span-4 flex gap-3  justify-center items-center">
            <div>
              <div className="border-2 border-b border-dotted border-[#D1D1D1] md:w-32 w-20"></div>
              <div className="border-2 border-b border-dotted border-[#D1D1D1] md:w-12 w-12 mt-4"></div>
            </div>
            <div className="border-2 border-dotted border-secondary_colour rounded-full md:w-16 md:h-16 w-12 h-12 gap-4 flex justify-center items-center ">
              <div className="bg-gray-200 rounded-full md:w-12 md:h-12 w-10 h-10 flex justify-center items-center ">
                <h2 className="text-primary_text font-fourth_font_abril font-medium">
                  {" "}
                  $ 10
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-12 justify-between items-center border border-[#D9D9D9] rounded-lg py-10 px-6">
          <div className="col-span-8 flex gap-3 justify-center items-center">
            <div className="border-2 border-dotted border-secondary_colour rounded-full md:w-24 md:h-24 w-14 h-14 gap-4 flex justify-center items-center ">
              <div className="bg-gray-200 rounded-full md:w-20 md:h-20 w-12 h-12 flex justify-center items-center ">
                <img src={image1} alt="image" />
              </div>
            </div>
            <div className=" flex flex-col justify-center items-start">
              {" "}
              <h2 className="medium-title-text-design">
                Coconut Cream Delight (Summer)
              </h2>
              <p className="normal-text-design mt-2 md:w-72 text-justify">
                There are many variations of passages Lorem Ipsum form
              </p>
            </div>
          </div>
          <div className="col-span-4 flex gap-3  justify-center items-center">
            <div>
              <div className="border-2 border-b border-dotted border-[#D1D1D1] md:w-32 w-20"></div>
              <div className="border-2 border-b border-dotted border-[#D1D1D1] md:w-12 w-12 mt-4"></div>
            </div>
            <div className="border-2 border-dotted border-secondary_colour rounded-full md:w-16 md:h-16 w-12 h-12 gap-4 flex justify-center items-center ">
              <div className="bg-gray-200 rounded-full md:w-12 md:h-12 w-10 h-10 flex justify-center items-center ">
                <h2 className="text-primary_text font-fourth_font_abril font-medium">
                  {" "}
                  $ 10
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
