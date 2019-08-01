import React from "react";
const HSMSF = props => {
  return (
    <>
      <header style={{ height: "50px", backgroundColor: "red" }}>
        {props.headerComponent}
      </header>

      <section style={{ height: "50px", backgroundColor: "green" }}>
        {props.sisdeComponent}
      </section>

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

export default HSMSF;
