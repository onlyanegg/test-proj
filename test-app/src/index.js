import React from "react";
import { render } from "react-dom";

import Hello from "test-lib";

function App() {
  return (
    <>
      <Hello />
      <div>done</div>
    </>
  );
}

render(<App />, document.getElementById("root"));
//console.log(hello);
