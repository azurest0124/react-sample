import React from "react";
const MF = props => {
  return (
    <>
      <main style={{ width: "100%" }}>{props.mainComponent}</main>
      <footer>{props.footerComponent}</footer>
    </>
  );
};

export default MF;
