import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroesList } from "../../redux/heroSelectors";
import { getOneHeroInfo } from "../../redux/heroOperations";
import css from "./HeroItems.module.css";

function HeroItem() {
  const dispatch = useDispatch();
  const heroes = useSelector(heroesList);

  const handleHeroCard = async (e) => {
    await dispatch(getOneHeroInfo(e.currentTarget.parentNode.id));
  };
  console.log(heroes);
  return (
    <>
      {heroes.map((hero) => {
        return (
          <li className={css.item} key={hero._id} id={hero._id}>
            <img className={css.img} src={hero.images} alt="Hero_image" />
            <p className={css.text}>{hero.nickname}</p>
            <button
              className={css.btn}
              onClick={handleHeroCard}
              data-modal="fullInfo"
            >
              See full info
            </button>
          </li>
        );
      })}
    </>
  );
}

export default HeroItem;
