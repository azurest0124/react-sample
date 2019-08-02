import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div bp="grid">
      <Link to="/">
        <div bp="2">AZURE's sample</div>
      </Link>

      <div bp="grid 10">
        <div>
          <Link to="/hmf">페이지HMF</Link>
        </div>
        <div>
          <Link to="/hsmf">페이지HSMF</Link>
        </div>
        <div>
          <Link to="/h_sm_f">페이지H_SM_F</Link>
        </div>
        <div>
          <Link to="/h_sms_f">페이지HSMSF</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
