import React from "react";

const InlineStyleComponent = () => {
  // ✅ Inline CSS object
  const style = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    fontFamily: "Arial",
    borderTopLeftRadius: "5px",
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={style}>Hello ReactJs</h1>
      <p style={{ color: "green", fontSize: "16px" }}>
        This is inline style text.
      </p>
    </div>
  );
};

export default InlineStyleComponent;
