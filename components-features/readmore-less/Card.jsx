import React, { useState } from "react";
import "./Card.css";

const Card = ({ title = "Some Title" }) => {
  // if no title(props) is passed "Some Title" will be displayed
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card">
      <div className="content">
        <h3>{title}</h3>
        <div className="paragraph-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            tempora temporibus tempore nulla odio maxime quae.
            {isExpanded &&
              " Nisi, maiores. Fugiat quasi iste, commodi eius obcaecati officiis!"}
            <span className="read-toggle" onClick={handleToggle}>
              {isExpanded ? " Read less" : "..Read more"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
