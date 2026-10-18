import ExtentionThree from "../assets/Group 8 (1).svg";
import SectionTwoContent from "./SectionTwoContent";


export default function SectionTwo() {
  return (
    <div className="bg-Sacramento-State-Green flex w-full h-175 relative">
      <div className="p-40">
        <div className="w-16 border-t-4 pt-15 border-Light-Coral"></div>
        <h1 className="text-white w-120 text-[50px] font-bold leading-none">
          Build & manage distributed teams like no one else.
        </h1>
      </div>
      <SectionTwoContent/>
      <figure>
        <img
          className="absolute right-0 bottom-20"
          src={ExtentionThree}
          alt=""
        />
      </figure>
    </div>
  );
}
