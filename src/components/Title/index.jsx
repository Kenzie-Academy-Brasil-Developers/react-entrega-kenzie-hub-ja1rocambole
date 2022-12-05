import React from "react";

export const Title = ({ title, className, children }) => {
  return (
    <>
      {title === "one" && <h1 className={className}>{children}</h1>}
      {title === "two" && <h2 className={className}>{children}</h2>}
      {title === "three" && <h3 className={className}>{children}</h3>}
    </>
  );
};
