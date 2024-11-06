import React from "react";
import "./styles.scss";

interface HeaderProps {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ leftChildren, rightChildren }) => {
  return (
    <div className="home-header flex justify-between items-center p-4">
      <div className="flex items-center gap-6">{leftChildren}</div>
      <div className="flex items-center gap-4">{rightChildren}</div>
    </div>
  );
};

export default Header;
