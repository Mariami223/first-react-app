import React from "react";

export const WrapperComponent = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default WrapperComponent;

const Navbar = () => {
  return <div> "This is Navbar" </div>;
};

const Footer = () => {
  return <div>"This is footer" </div>;
};
