import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div bp="grid">
      <Link to="/">
        <div bp="2">AZURE's sample</div>
      </Link>
    </div>
  );
};

export default Header;
