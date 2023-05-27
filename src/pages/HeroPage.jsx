import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHeroList } from "../redux/heroOperations";
import HeroList from "../components/HeroLists";
import ModalHelper from "../components/Modals/ModalHelper/ModalHelper";

function HeroPage() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroList({ page: 1, limit: 5 }));
  });

  const handleModalOpen = (e) => {
    const {
      target: {
        dataset: { modal },
      },
    } = e;
    if (modal) setIsOpen(modal);
  };

  return (
    <div onClick={handleModalOpen}>
      <button data-modal="createHero">Add new hero</button>
      <HeroList openmodal={setIsOpen} />
      <ModalHelper modal={isOpen} closemodal={setIsOpen} />
    </div>
  );
}
export default HeroPage;
