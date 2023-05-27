import React from "react";
import HeroItem from "./HeroItems";

function HeroList({ openmodal }) {
  return (
    <div>
      <ul>
        <HeroItem open={openmodal} />
      </ul>
    </div>
  );
}

export default HeroList;
