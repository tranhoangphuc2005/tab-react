import React, { useState } from "react";
import "../Css/Info.css";
import { Button, Card } from "semantic-ui-react";

const Info = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {props.tabs.map((tab) => (
        <div>
          <button
            class="ui button"
            onClick={() => {
              if (isOpen === false) {
                setIsOpen(true);
              } else {
                setIsOpen(false);
              }
            }}
          >
            {tab.company}
          </button>
          <Card
            header={tab.title}
            meta={tab.dates}
            description={tab.duties}
            isOpen={true}
          />
        </div>
      ))}
    </>
  );
};

export default Info;
