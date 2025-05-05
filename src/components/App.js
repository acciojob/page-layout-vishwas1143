import React from "react";
import "./../styles/App.css";
import Page from "./Page";

const App = () => {
  return (
    <div>
      <Page
        header="Welcome to my Website"
        footer={`© ${new Date().getFullYear()} My Website. All rights reserved.`}
      >
        <p>This is the content of my website.</p>
      </Page>
    </div>
  );
};

export default App;
