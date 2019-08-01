import React from "react";
const MF = props => {
  return (
    <>
      <main>{props.mainComponent}</main>
      <footer style={{ height: "50px", backgroundColor: "yellow" }}>
        {props.footerComponent}
      </footer>
    </>
  );
};

export default MF;
