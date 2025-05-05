import React from "react";

const Page = ({ header, dis, footer }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{dis}</p>
      <footer>{footer}</footer>
    </div>
  );
};

export default Page;
