import cupbanner from "../assets/images/banner/bannerimg.png";
import flowerbottom from "../assets/images/banner/flower-bottom.png";
import flowerleft from "../assets/images/banner/flower-left.png";
import flowerright from "../assets/images/banner/flower-right.png";
export default function Banner() {
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
      <div className="border-l border-[#D9D9D9] container mx-auto grid grid-cols-8 gap-4 px-16 py-28">
        <div className="col-span-4">
          <h4>WELCOME TO OUR</h4>
          <h2>unlocklive</h2>
          <h3>Elevating Your Coffee Experience</h3>
          <p>
            Unlocklive embodies our commitment to transforming the simple act of
            sipping coffee into a refined and memorable journey. At Epicurean,
            we take pride in curating an exceptional coffee experience that
            transcends the ordinary.
          </p>
          <div>
            <button>EXPLORE OUR MENU</button>
          </div>
        </div>
        <div className="col-span-4">
          <img src={cupbanner} alt="cup" />
        </div>
      </div>
    </div>
  );
}
