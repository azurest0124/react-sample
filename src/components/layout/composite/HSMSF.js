import React from "react";
const HSMSF = props => {
  return (
    <>
      <div bp="grid" style={{ height: "100%" }}>
        <section bp="2" style={{ backgroundColor: "green" }}>
          {props.leftSideComponent}
        </section>

        <main bp="8" style={{ backgroundColor: "purple", width: "100%" }}>
          {props.mainComponent}
        </main>

        <section bp="2" style={{ backgroundColor: "green" }}>
          {props.rightSideComponent}
        </section>
      </div>
      <footer>{props.footerComponent}</footer>
    </>
  );
};

export default HSMSF;
