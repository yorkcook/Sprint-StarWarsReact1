import React from "react";

const Characters = ({ starwarsChars }) => {
  return starwarsChars.map(name => name);
};

export default Characters;
