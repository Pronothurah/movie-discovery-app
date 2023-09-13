import React from 'react';

import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { RiChat1Line } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

function Footer() {

  return (
    <div className="footer-wrapper">
        <div className="footer-icons">
          <BsTwitter />
          <IoLogoInstagram />
          <RiChat1Line/>
          <FaFacebookF />
        </div>
        <div className="footer-copywright">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Press Room</span>
        </div>
        <div className="footer-creator">
          <span>&#169;2023 MovieBox by Pronothurah</span>
        </div>
    </div>

  )
}

export default Footer