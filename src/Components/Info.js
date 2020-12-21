import React from "react";
import "../Css/Info.css";
import { Button } from "semantic-ui-react";

const Info = (props) => {
  console.log(props);
  return (
    <>
      {props.tabs.map((tab) => (
        <button class="ui button">{tab.company}</button>
      ))}
    </>
  );
};

export default Info;
