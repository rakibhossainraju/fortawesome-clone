import React from "react";

const IconCardComponent = ({ fontAwesomeSvgs }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {fontAwesomeSvgs.map(({ svgProperties }) => (
        <svg
          key={svgProperties.path}
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox={svgProperties.viewBox}
        >
          <path d={svgProperties.path} />
        </svg>
      ))}
    </div>
  );
};

export default IconCardComponent;
