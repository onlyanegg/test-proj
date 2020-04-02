import React, { useState } from "react";

function Hello() {
  const [greeting, setGreeting] = useState("Hello there");
  return <div>{greeting}</div>;
}

export default Hello;
