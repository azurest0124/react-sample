import React from "react";
const HMF = props => {
  return (
    <>
      <header style={{ height: "50px", backgroundColor: "red" }}>
        {props.headerComponent}
      </header>
      <main>{props.mainComponent}</main>
      <footer style={{ height: "50px", backgroundColor: "yellow" }}>
        {props.footerComponent}
      </footer>
    </>
  );
};

export default HMF;
