export default function Header(){
    return(
        <div className=" px-50 py-10 flex justify-between">
            <nav className="flex justify-between ">
                <a className="text-white pr-25 text-5xl" href="">myTeam</a>
                <a className="text-white pr-10 pt-5 text-[18px]" href="">home</a>
                <a className="text-white pr-10 pt-5 text-[18px]" href="">about</a>
            </nav>
            <button className="text-white text-[18px] px-5 border-2 rounded-4xl" >
                <a href="">contact us</a>
            </button>
        </div>
    );
};