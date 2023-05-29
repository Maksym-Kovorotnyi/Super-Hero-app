import React from "react";
import HeroItem from "../HeroItems/HeroItems";
import css from "./HeroLists.module.css";
import { Load } from "../../redux/heroSelectors";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

function HeroList() {
  const isLoad = useSelector(Load);
  return (
    <div>
      {isLoad ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          <HeroItem />
        </ul>
      )}
    </div>
  );
}

export default HeroList;
