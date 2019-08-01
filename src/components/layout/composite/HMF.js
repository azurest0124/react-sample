import React from "react";
const HMF = props => {
  console.info(props.mainComponent);
  return (
    <>
      <header style={{ height: "50px", backgroundColor: "red" }}>
        헤더입니다
      </header>
      <main>{props.mainComponent}</main>
      <footer style={{ height: "50px", backgroundColor: "yellow" }}>
        풋터입니다
      </footer>
    </>
  );
};

export default HMF;
