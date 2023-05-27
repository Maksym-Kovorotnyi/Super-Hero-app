import React from "react";
import { useSelector } from "react-redux";
import { heroesList } from "../redux/heroSelectors";

function HeroItem() {
  const heroes = useSelector(heroesList);

  console.log(heroes);
  return (
    <>
      {heroes.map((hero) => {
        return (
          <li>
            <img src={hero.images} alt="Hero_image" />
            <p>{hero.nickname}</p>
          </li>
        );
      })}
    </>
  );
}

export default HeroItem;
