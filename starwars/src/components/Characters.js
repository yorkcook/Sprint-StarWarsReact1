import React from "react";

// import Item from "./Item";

const Characters = ({ starwarsChars }) => {
  return starwarsChars.map(person => person.name);
};

// const Characters = ({ starwarsChars }) => {
//   let people = starwarsChars.map(person => <Item key={person} />);
//   return people;
// };

export default Characters;
