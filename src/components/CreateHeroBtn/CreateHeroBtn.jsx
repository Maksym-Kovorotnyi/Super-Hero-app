import React from "react";
import css from "./CreateHeroBtn.module.css";

function CreateHeroBtn() {
  return (
    <>
      <button className={css.btn} data-modal="createHero">
        Add new hero
      </button>
    </>
  );
}

export default CreateHeroBtn;
