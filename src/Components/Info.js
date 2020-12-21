import React from "react";
import "../Css/Info.css";

const Info = (props) => {
  return (
    <>
      {props.tabs.map((tab) => (
        <div>{tab.id}</div>
      ))}
    </>
  );
};

export default Info;
