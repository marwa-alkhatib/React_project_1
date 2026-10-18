import Photo1 from "../assets/Group 11.svg";
import Photo2 from "../assets/Group 12.svg";
import Photo3 from "../assets/Group 13.svg";


export default function SectionTwoContext() {
  return (
    <div className="pt-40">
        <div className="w-125 p-6 flex gap-5">
            <img src={Photo1} alt="" />
            <div className="flex-col justify-items-start">
                <h5 className="text-Light-Coral pb-1 text[18px]">Experienced Individuals</h5>
                <p className="text-white text-[14px]">Our network is made up of highly experienced professionals who are passionate about what they do.</p>
            </div>
        </div>
        <div className="w-125 p-6 flex gap-5">
            <img src={Photo2} alt="" />
            <div className="flex-col justify-items-start">
                <h5 className="text-Light-Coral pb-1 text[18px]">Easy to Implement</h5>
                <p className="text-white text-[14px]">Our processes have been refined over years of implementation meaning our teams always deliver.</p>
            </div>
        </div>
        <div className="w-125 p-6 flex gap-5">
            <img src={Photo3} alt="" />
            <div className="flex-col justify-items-start">
                <h5 className="text-Light-Coral pb-1 text[18px]">Enhanced Productivity</h5>
                <p className="text-white text-[14px]">Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </div>
        </div>
    </div>
  );
};