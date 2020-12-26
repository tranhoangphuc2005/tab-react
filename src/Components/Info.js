import React, { useState } from "react";
import "../Css/Info.css";
import { Button, Card } from "semantic-ui-react";

const Info = (props) => {
  return (
    <>
      {props.tabs.map((tab) => (
        <div key={tab.id}>
          <button
            className={"ui button"}
            onClick={() => {
              props.changeIsOpen(tab.id);
            }}
          >
            {tab.company}
          </button>
          {tab.isOpen && (
            <Card
              header={tab.title}
              meta={tab.dates}
              description={tab.duties}
              isOpen={tab.isOpen}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Info;
