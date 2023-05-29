import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHeroList } from "../redux/heroOperations";
import HeroList from "../components/HeroList/HeroLists";
import CreateHeroBtn from "../components/CreateHeroBtn/CreateHeroBtn";
import ModalHelper from "../components/Modals/ModalHelper/ModalHelper";
import Pagination from "../components/Pagination/Pagination";

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
      <CreateHeroBtn />
      <HeroList />
      <ModalHelper modal={isOpen} closemodal={setIsOpen} />
      <Pagination />
    </div>
  );
}
export default HeroPage;
