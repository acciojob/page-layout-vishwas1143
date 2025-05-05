import React from "react";
import "./../styles/App.css";
import Page from "./Page";

const App = () => {
  return (
    <div>
      <Page
        header="Welcome to my Website"
        dis="This is the content of my website."
        footer={`© ${new Date().getFullYear()} My Website. All rights reserved.`}
      ></Page>
    </div>
  );
};

export default App;
