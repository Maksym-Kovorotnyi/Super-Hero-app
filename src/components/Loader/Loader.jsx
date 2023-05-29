import React from "react";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.container}>
      <div className={css.loader}>
        <div className={css.spinner}></div>
        <p className={css.text}>Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
