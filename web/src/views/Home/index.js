import React from "react";

import Form from "./components/Form";
import List from "./components/List";

function Home({ history }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Form />
      <List />
    </div>
  );
}

export default Home;
