// components/Footer.tsx
import Link from "next/link";
import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Container from "./Wrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 px-6 sm:px-10 md:px-20 lg:px-32">
      <Container className="py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and About */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-white">Atul Kumar</h2>
              <span className="ml-2 text-teal-400">Portfolio</span>
            </div>
            <p className="mb-4 text-sm md:text-base">
              Passionate developer focused on creating beautiful, functional,
              and user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/yourusername" aria-label="GitHub" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <FaLinkedin size={22} />
              </a>
              <a href="https://twitter.com/yourusername" aria-label="Twitter" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <FaTwitter size={22} />
              </a>
              <a href="mailto:atulshahi2003@gmail.com" aria-label="Email" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <HiMail size={22} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-teal-400 mr-2">Email:</span>
                <a href="mailto:atulshahi2003@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 break-all">
                  atulshahi2003@gmail.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-teal-400 mr-2">Location:</span>
                <span className="text-gray-400">Rohtak, India</span>
              </li>
              <li className="mt-3">
                <Link href="/contact" className="inline-block bg-teal-500 hover:bg-teal-600 text-black font-medium px-4 py-2 rounded transition-colors duration-300">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col justify-center items-center space-y-2 text-center">
          <div className="flex flex-row items-center space-x-1.5">
            <p>made with</p>
            <FaHeart size={18} color="red" />
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            © {currentYear} Atul Kumar. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
