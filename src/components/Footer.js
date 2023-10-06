import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Your Website</p>
      </div>
    </footer>
  );
};

export default Footer;