import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHeroList } from "../redux/heroOperations";
import HeroList from "../components/HeroLists";

function HeroPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroList({ page: 1, limit: 5 }));
  });

  return (
    <>
      <HeroList />
    </>
  );
}
export default HeroPage;
