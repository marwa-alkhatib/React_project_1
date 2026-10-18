import { FaFacebookSquare, FaPinterest, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-Dark-Green py-12 px-6">
      <div className="max-w-280 mx-auto flex flex-col md:flex-row justify-between gap-10">

        <div className="flex flex-col justify-between gap-8">
          <h2 className="text-white text-5xl font-bold tracking-tight">
            myteam
          </h2>

          <nav className="flex gap-10 text-white text-lg font-semibold">
            <a href="/" className="hover:text-light-coral">
              home
            </a>
            <a href="/about" className="hover:text-light-coral">
              about
            </a>
          </nav>
        </div>

        <div className="text-white/60 leading-7 text-[16px]">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>

        <div className="flex flex-col justify-between gap-12 md:items-end">
          <div className="flex gap-4 text-white text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-light-coral">
              <FaFacebookSquare />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-light-coral">
              <FaPinterest />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-light-coral">
              <FaTwitter />
            </a>
          </div>

          <p className="text-white/60 text-[15px]">
            Copyright 2020. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};