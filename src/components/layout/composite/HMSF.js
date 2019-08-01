import React from "react";
const HMSF = props => {
  return (
    <>
      <main style={{ width: "100%" }}>{props.mainComponent}</main>

      <section style={{ height: "50px", backgroundColor: "green" }}>
        {props.sisdeComponent}
      </section>

      <footer>{props.footerComponent}</footer>
    </>
  );
};

export default HMSF;
