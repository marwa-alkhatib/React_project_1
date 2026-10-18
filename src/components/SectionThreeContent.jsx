import Photo6 from "../assets/“.svg";
import Photo7 from "../assets/Oval.svg";
import Photo8 from "../assets/Oval Copy 5.svg";
import Photo9 from "../assets/Oval Copy 6.svg";

export default function SectionTwoContext() {
  return (
    <div className="relative">
      <p className="text-white text-[55px] text-center font-semibold w-255 absolute top-20 left-60 leading-13">
        Delivering real results for top companies. Some of our
        <span className="text-Rapture-Blue"> success stories.</span>
      </p>
      <div className=" flex text-center items-center absolute top-70 left-10">
        <div className="relative flex-col w-125 p-20 ">
          <div className="relative">
            <img
              className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-60"
              src={Photo6}
              alt=""
            />

            <p className="relative z-10 text-white text-[18px] leading-6.25 pb-3 text-center">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
          </div>
          <h6 className="text-Rapture-Blue text-[20px] ">Kady Baker</h6>
          <p className=" text-white pb-3 italic">Product Manager at Bookmark</p>
          <img className="absolute bottom-0 right-50" src={Photo7} alt="" />
        </div>
        <div className="relative flex-col w-125 p-20 ">
          <div className="relative">
            <img
              className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-60"
              src={Photo6}
              alt=""
            />

            <p className="relative z-10 text-white text-[18px] leading-6.25 pb-3 text-center">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
          </div>
          <h6 className="text-Rapture-Blue text-[20px] ">Aiysha Reese</h6>
          <p className="text-white pb-3 italic">Founder of Manage</p>
          <img className="absolute bottom-0 right-50" src={Photo8} alt="" />
        </div>
        <div className="relative flex-col w-125 p-20 ">
          <div className="relative">
            <img
              className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-60"
              src={Photo6}
              alt=""
            />

            <p className="relative z-10 text-white text-[18px] leading-6.25 pb-3 text-center">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
          </div>
          <h6 className="text-Rapture-Blue text-[20px] ">Arthur Clarke</h6>
          <p className="text-white pb-3 italic">Co-founder of MyPhysio</p>
          <img className="absolute bottom-0 right-50" src={Photo9} alt="" />
        </div>
      </div>
    </div>
  );
}
