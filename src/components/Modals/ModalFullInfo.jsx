import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroFullInfo } from "../../redux/heroSelectors";
import Modal from "./Modal";
import { deleteHero } from "../../redux/heroOperations";
import { deleteHeroFromArray } from "../../redux/heroSlice";

function ModalFullInfo({ open = false }) {
  const { _id, images, catch_phrase, nickname, origin_description, real_name } =
    useSelector(heroFullInfo);
  const dispatch = useDispatch();

  const handleDeleteHero = async (e) => {
    const id = e.currentTarget.parentNode.id;
    await dispatch(deleteHero(id));
    dispatch(deleteHeroFromArray(id));
    open(false);
  };

  return (
    <>
      <Modal open={open}>
        <div id={_id}>
          <img src={images} alt="Hero_photo" />
          <div>
            <p>Nickname: {nickname}</p>
            <p>Real name: {real_name}</p>
            <p>Description: {origin_description}</p>
            <p>Catch phrase: {catch_phrase}</p>
          </div>
          <button onClick={handleDeleteHero}>Delete hero</button>
        </div>
      </Modal>
    </>
  );
}

export default ModalFullInfo;
