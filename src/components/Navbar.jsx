import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed inset-x-0 z-50 top-4">
        {/* Desktop Menu */}
        <div className="items-center justify-center hidden max-w-2xl py-1 mx-auto border rounded-lg bg-black/20 border-stone-50/30 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#" onClick={(e) => backToTop(e)}>
                <img src={logo} width={50} alt="logo" className="rounded-lg" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/*Mobile Menu*/}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" onClick={(e) => backToTop(e)}>
                <img
                  src={logo}
                  alt="logo"
                  width={50}
                  className="m-4 rounded-lg"
                />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-5 h-6 m-4" />
                ) : (
                  <FaBars className="w-5 h-6 m-4" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <ul className="flex flex-col gap-4 mt-4 ml-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
