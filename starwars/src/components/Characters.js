import React from "react";

import Item from "./Item";

const Characters = ({ starwarsChars }) => {
  return (
    <div className="names">
      {starwarsChars.map(character => (
        <Item character={character} />
      ))}
    </div>
  );
};

export default Characters;
