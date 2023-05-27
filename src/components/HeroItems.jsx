import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroesList } from "../redux/heroSelectors";
import { getOneHeroInfo } from "../redux/heroOperations";

function HeroItem({ open }) {
  const dispatch = useDispatch();
  const heroes = useSelector(heroesList);

  const handleHeroCard = async (e) => {
    await dispatch(getOneHeroInfo(e.currentTarget.parentNode.id));
  };

  return (
    <>
      {heroes.map((hero) => {
        return (
          <li key={hero._id} id={hero._id}>
            <img src={hero.images} alt="Hero_image" />
            <p>{hero.nickname}</p>
            <button onClick={handleHeroCard} data-modal="fullInfo">
              See full info
            </button>
          </li>
        );
      })}
    </>
  );
}

export default HeroItem;
