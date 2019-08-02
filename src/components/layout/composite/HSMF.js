import React from "react";
const HSMF = props => {
  return (
    <>
      <div bp="grid" style={{ height: "100%" }}>
        <section bp="2" style={{ backgroundColor: "green" }}>
          {props.sideComponent}
        </section>
        <main bp="10" style={{ backgroundColor: "purple", width: "100%" }}>
          {props.mainComponent}
        </main>
      </div>

      <footer>{props.footerComponent}</footer>
    </>
  );
};

export default HSMF;
