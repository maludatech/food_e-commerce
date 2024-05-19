import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faInstagram, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="fixed bottom-0 w-full p-3 z-20 bg-black text-yellow-500 flex justify-between">
        <p>Copyright {year} &copy; Maluda's Jollof.</p>

        <div className="flex gap-6">
          <Link href={"https://www.instagram.com/maludatech/"}><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link href={"https://twitter.com/maludatech"}><FontAwesomeIcon icon={faGithub} /></Link>
          <Link href={"https://github.com/maludatech"}><FontAwesomeIcon icon={faTwitter} /></Link>
        </div>
    </div>
  )
}

export default Footer