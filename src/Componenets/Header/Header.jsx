import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaBars } from "react-icons/fa";
import logo from '../../assets/logo2.png'
import './Header.css'

const Header = () => {
  function toggleMenu() {
    const mobileMenuContent = document.getElementById('mobileMenuContent')
    if (mobileMenuContent.getAttribute('class') === 'hidden') {
      mobileMenuContent.setAttribute('class', 'block')
    } else {
      mobileMenuContent.setAttribute('class', 'hidden')
    }
}
  return (
    <>
      <nav className="bg-blue-100">
        <div className="hidden md:block">
          <div className="flex justify-between items-center h-18">
            <div className="grid grid-cols-3 lg:gap-x-4 md:gap-x-3 ml-8 text-xl font-bold">
            <img src={logo} alt="" />
            <h1 className="mt-4 text-2xl">Knowledge Cafe</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 mr-8 text-2xl font-bold">
            <a href="/Home">Home</a>
              <a href="/Blog">Blog</a>
              <a href="/Contact">Contact</a>
              {/* <a href="https://www.facebook.com/shaharia0/">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://www.facebook.com/shaharia0/">
                <FaInstagram></FaInstagram>
              </a>
              <a href="https://www.facebook.com/shaharia0/">
                <FaGithub></FaGithub>
              </a> */}
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex items-center justify-center h-18">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="ml-10">
              <button onClick={()=>toggleMenu()}>
                <FaBars></FaBars>
              </button>
            </div>
          </div>
          <div className="hidden" id="mobileMenuContent">
            <div className="flex flex-col mb-2 justify-center items-center">
              <a href="/Home">Home</a>
              <a href="/Blog">Blog</a>
              <a href="/Contact">Contact</a>
            </div>
            <div className="flex gap-4  text-2xl font-bold justify-center items-center">
              <a href="https://www.facebook.com/shaharia0/">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://www.facebook.com/shaharia0/">
                <FaInstagram></FaInstagram>
              </a>
              <a href="https://www.facebook.com/shaharia0/">
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
