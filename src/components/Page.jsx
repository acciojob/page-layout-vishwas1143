import React from "react";

const Page = ({ header, children, footer }) => {
  return (
    <div>
      <h1>{header}</h1>
      {children}
      <footer>{footer}</footer>
    </div>
  );
};

export default Page;
