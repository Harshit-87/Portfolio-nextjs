//links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinBoxFill,
  RiPhoneFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"tel:+918299846359"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiPhoneFill />
      </Link>
      <Link
        href={"mailto:harshitsrivastava25012002@gmail.com"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <SiGmail />
      </Link>
      <Link
        href={"http://www.linkedin.com/in/harshitsrivastava77"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://www.instagram.com/harshooooo/?next=%2F"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={
          "https://www.facebook.com/harshit.srivastava.5876060?mibextid=ZbWKwL"
        }
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://twitter.com/HarshitS57"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiTwitterXLine />
      </Link>
    </div>
  );
};

export default Socials;
