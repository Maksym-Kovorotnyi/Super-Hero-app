import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroFullInfo } from "../../../redux/heroSelectors";
import Modal from "../Modal";
import { deleteHero, getHeroList } from "../../../redux/heroOperations";
import UpdateHeroInfo from "../../UpdateHeroInfo/UpdateHeroInfo";
import css from "./ModalFullInfo.module.css";

function ModalFullInfo({ open = false, close }) {
  const { _id, images, catch_phrase, nickname, origin_description, real_name } =
    useSelector(heroFullInfo);

  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteHero = (e) => {
    const id = e.currentTarget.offsetParent.id;
    dispatch(deleteHero(id));
    dispatch(getHeroList({ page: 1, limit: 5 }));
    close(false);
  };

  const handleToggleEdit = (e) => {
    setEdit(true);
  };

  return (
    <>
      <Modal open={open}>
        <div className={css.modal} id={_id}>
          <div className={css.imgContainer}>
            <img className={css.img} src={images} alt="Hero_photo" />
          </div>
          {edit ? (
            <UpdateHeroInfo closeModal={close} />
          ) : (
            <div>
              <p className={css.text}>
                Nickname: <span className={css.dynText}>{nickname}</span>
              </p>
              <p className={css.text}>
                Real name: <span className={css.dynText}>{real_name}</span>
              </p>
              <p className={css.text}>
                Description:{" "}
                <span className={css.dynText}>{origin_description}</span>
              </p>

              <p>
                Catch phrase:{" "}
                <span className={css.dynText}>{catch_phrase}</span>
              </p>
              <div className={css.btnContainer}>
                <button
                  type="button"
                  className={css.btnEdit}
                  onClick={handleToggleEdit}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className={css.btnDelete}
                  onClick={handleDeleteHero}
                >
                  Delete hero
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ModalFullInfo;
