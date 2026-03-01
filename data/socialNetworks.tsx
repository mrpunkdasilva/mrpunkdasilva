import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaNewspaper } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

const listSocialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/gustavo-henrique-de-jesus" },
  { name: "github", icon: <FaGithub color={"white"} />, link: "https://www.github.com/mrpunkdasilva" },
  // { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/punk.da.silva" },
  // { name: "twitter", icon: <FaTwitter />, link: "https://www.x.com/MrPunkSama" },
  { name: "tabnews", icon: <FaNewspaper />, link: "https://www.tabnews.com.br/mrpunkdasilva" },
  { name: "dev.to", icon: <SiDevdotto />, link: "https://dev.to/mrpunkdasilva" }
];

export default listSocialNetworks;
