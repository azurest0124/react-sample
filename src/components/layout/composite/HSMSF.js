import React from "react";
const HSMSF = props => {
  return (
    <>
      <section style={{ height: "50px", backgroundColor: "green" }}>
        {props.sisdeComponent}
      </section>

      <main style={{ width: "100%" }}>{props.mainComponent}</main>

      <section style={{ height: "50px", backgroundColor: "green" }}>
        {props.sisdeComponent}
      </section>

      <footer>{props.footerComponent}</footer>
    </>
  );
};

export default HSMSF;
