import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroFullInfo } from "../../../redux/heroSelectors";
import Modal from "../Modal";
import { deleteHero } from "../../../redux/heroOperations";
import { deleteHeroFromArray } from "../../../redux/heroSlice";
import css from "./ModalFullInfo.module.css";

function ModalFullInfo({ open = false, close }) {
  const { _id, images, catch_phrase, nickname, origin_description, real_name } =
    useSelector(heroFullInfo);
  const dispatch = useDispatch();

  const handleDeleteHero = async (e) => {
    const id = e.currentTarget.parentNode.id;
    await dispatch(deleteHero(id));
    dispatch(deleteHeroFromArray(id));
    close(false);
  };

  return (
    <>
      <Modal open={open}>
        <div className={css.modal} id={_id}>
          <div className={css.imgContainer}>
            <img className={css.img} src={images} alt="Hero_photo" />
          </div>
          <p className={css.text}>
            Nickname: <span className={css.dynText}>{nickname}</span>
          </p>
          <p className={css.text}>
            Real name: <span className={css.dynText}>{real_name}</span>
          </p>
          <p className={css.text}>
            Description:
            <span className={css.dynText}>{origin_description}</span>
          </p>

          <p>
            Catch phrase: <span className={css.dynText}>{catch_phrase}</span>
          </p>
          <button className={css.btn} onClick={handleDeleteHero}>
            Delete hero
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ModalFullInfo;
