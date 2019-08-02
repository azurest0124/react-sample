import React from "react";
import { Link } from "react-router-dom";

const Side = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" className="no-underline">
            사이드 메뉴 1
          </Link>
        </li>
        <li>사이드 메뉴 2</li>
        <li>사이드 메뉴 3</li>
        <li>사이드 메뉴 4</li>
        <li>사이드 메뉴 5</li>
      </ul>
    </div>
  );
};

export default Side;
