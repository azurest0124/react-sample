import React from "react";
const H_SM_F = props => {
  return (
    <>
      <div bp="grid" style={{ height: "100%" }}>
        {" "}
        <section bp="2 offset-3" style={{ backgroundColor: "green" }}>
          {props.sideComponent}
        </section>
        <main bp="6" style={{ backgroundColor: "purple", width: "100%" }}>
          {props.mainComponent}
        </main>
      </div>

      <footer>{props.footerComponent}</footer>
    </>
  );
};

export default H_SM_F;
