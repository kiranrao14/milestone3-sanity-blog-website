
import Image from "next/image";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-slate-600 text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src='/images/logoDark.png' width={80} height={80} alt="logo" />
         </div>
          <div className="text-center mt-4">
        <p className="flex items-center justify-center text-sm font-titleFont gap-1">
          <AiOutlineCopyrightCircle className="mt-[1px]" />
          reactBD || all rights reserved
        </p>
      </div>
         
        

        <div className="flex gap-6">
          <Link href="https://www.youtube.com" passHref
             target="_blank" rel="noopener noreferrer">
              <BsYoutube className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
            
          </Link>

          <Link href="https://www.facebook.com" passHref
            target="_blank" rel="noopener noreferrer">
              <BsFacebook className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
            
          </Link>

          <Link href="https://github.com" passHref
             target="_blank" rel="noopener noreferrer">
              <BsGithub className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
            
          </Link>

          <Link href="https://www.linkedin.com" passHref
            target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
            
          </Link>

          <Link href="https://twitter.com" passHref
            target="_blank" rel="noopener noreferrer">
              <BsTwitter className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
