import React from "react";

import Item from "./Item";

const Characters = ({ starwarsChars }) => {
  return starwarsChars.map(name => <Item key={name} />);
};

export default Characters;
