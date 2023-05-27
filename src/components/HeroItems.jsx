import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroesList } from "../redux/heroSelectors";
import { getOneHeroInfo } from "../redux/heroOperations";

function HeroItem() {
  const dispatch = useDispatch();
  const heroes = useSelector(heroesList);

  const handleHeroCard = async (e) => {
    await dispatch(getOneHeroInfo(e.currentTarget.id));
  };

  return (
    <>
      {heroes.map((hero) => {
        return (
          <li onClick={handleHeroCard} key={hero._id} id={hero._id}>
            <img src={hero.images} alt="Hero_image" />
            <p>{hero.nickname}</p>
          </li>
        );
      })}
    </>
  );
}

export default HeroItem;
