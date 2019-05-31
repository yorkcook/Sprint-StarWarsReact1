import React from "react";

import Item from "./Item";

const Characters = ({ starwarsChars }) => {
  return starwarsChars.map((name, getCharacters) => name);
};

// const Characters = ({ starwarsChars }) => {
//   let people = starwarsChars.map(name => <Item key={name} />);
//   return people;
// };

export default Characters;
