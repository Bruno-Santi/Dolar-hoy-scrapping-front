import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
const Footer = () => {
  return (
    <footer className="">
      <h2 className="font-manrope text-gray-50 text-lg">Bruno Santimaria</h2>
      <div className="flex justify-center ">
        <a
          href="https://www.linkedin.com/in/bruno-santimaria/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Linkedin} className="w-12 h-15 m-1" />
        </a>
        <a
          href="https://github.com/Bruno-Santi"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Github} className="w-11 h-11 m-2 "></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
