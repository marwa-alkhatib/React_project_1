import ExtentionOne from "../assets/Group 8.svg";
import ExtentionTwo from "../assets/Group 7.svg";
import Header from "./Header";
import HeroContent from "./HeroContent";

export default function PageOneGround() {
  return (
    <div className="bg-Midnight-Greena w-full h-185 relative">
      <Header/>
      <HeroContent/>
      <figure >
        <img className="w-30 absolute top-40 left-0" src={ExtentionOne} alt="Extention" />
        <img className="w-110 absolute bottom-0 right-50" src={ExtentionTwo} alt="Extention" />
      </figure>
    </div>
  );
};
