import React from "react";
const HSMF = props => {
  return (
    <>
      <header style={{ height: "50px", backgroundColor: "red" }}>
        {props.headerComponent}
      </header>
      <section style={{ height: "50px", backgroundColor: "green" }}>
        {props.sisdeComponent}
      </section>
      <main>{props.mainComponent}</main>
      <footer style={{ height: "50px", backgroundColor: "yellow" }}>
        {props.footerComponent}
      </footer>
    </>
  );
};

export default HSMF;
