import React from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { createHero } from "../../redux/heroOperations";
function ModalCreateHero({ open = false, closemodal }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

 
      dispatch(
        createHero({
          nickname: form.elements.nickname.value,
          real_name: form.elements.realName.value,
          origin_description: form.elements.description.value,
          catch_phrase: form.elements.phrase.value,
          images: imagePath,
        })
      );
    };
    // form.reset();
  };

  return (
    <>
      <Modal open={open}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nickname" placeholder="Nickname" />
          <input type="text" name="realName" placeholder="RealName" />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
          ></textarea>
          <input type="text" name="phrase" placeholder="Catch phrase" />
          <label htmlFor="image">Add image of hero</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/png, image/jpeg"
          />

          <button type="submit">Add hero</button>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreateHero;
