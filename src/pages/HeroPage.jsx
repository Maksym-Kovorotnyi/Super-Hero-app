import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHeroList } from "../redux/heroOperations";
import HeroList from "../components/HeroLists";
import Modal from "../components/modal";

function HeroPage() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getHeroList({ page: 1, limit: 5 }));
  });

  return (
    <div>
      <Modal open={isOpen} />
      <HeroList />
    </div>
  );
}
export default HeroPage;
