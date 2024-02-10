import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white p-2"
      style={{ height: "5vh", position: "" }}
    >
      <div className="container text-center">
        <div className="row">
          <div className="">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/your-harsh-profile/"
              className="text-white"
            >
              Harsh
            </a>{" "}
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/your-mohit-profile/"
              className="text-white"
            >
              Mohit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
