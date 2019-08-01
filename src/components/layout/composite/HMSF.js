import React from "react";
const HMSF = props => {
  return (
    <>
      <header style={{ height: "50px", backgroundColor: "red" }}>
        {props.headerComponent}
      </header>

      <main>{props.mainComponent}</main>

      <section style={{ height: "50px", backgroundColor: "green" }}>
        {props.sisdeComponent}
      </section>

      <footer style={{ height: "50px", backgroundColor: "yellow" }}>
        {props.footerComponent}
      </footer>
    </>
  );
};

export default HMSF;
