import Photo4 from "../assets/Group 8 (3).svg";
import Photo5 from "../assets/Group 8 Copy.svg";
import SectionThreeContent from "./SectionThreeContent"

export default function SectionThree() {
  return (
    <div className="bg-Deep-Jungle-Green flex w-full h-195 relative ">
        <SectionThreeContent/>
      <figure>
        <img className="absolute right-0 bottom-0 " src={Photo4} alt="" />
        <img className="absolute top-0 left-0 " src={Photo5} alt="" />
      </figure>
    </div>
  );
}
