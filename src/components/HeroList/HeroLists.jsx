import React from "react";
import HeroItem from "../HeroItems/HeroItems";
import css from "./HeroLists.module.css";

function HeroList() {
  return (
    <div>
      <ul className={css.container}>
        <HeroItem />
      </ul>
    </div>
  );
}

export default HeroList;
