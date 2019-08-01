import React from "react";

const HMF = props => {
  return (
    <>
      <main bp="grid" style={{ backgroundColor: "pink", height: "100%" }}>
        <div bp="6 offset-4" style={{ backgroundColor: "purple" }}>
          <div bp="grid">
            <div bp="6 offset-4">{props.mainComponent}</div>
          </div>
        </div>
      </main>
      <footer>{props.footerComponent}</footer>
    </>
  );
};

export default HMF;
