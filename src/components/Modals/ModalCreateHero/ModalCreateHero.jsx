import React, { useState } from "react";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { createHero } from "../../../redux/heroOperations";
import css from "./ModalCreateHero.module.css";

function ModalCreateHero({ open = false }) {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      createHero({
        nickname: form.nickname.value,
        real_name: form.realName.value,
        origin_description: form.description.value,
        catch_phrase: form.phrase.value,
        image: selectedFile,
      })
    );
    // form.reset();
  };
  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <Modal open={open}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.textInput}
            type="text"
            name="nickname"
            placeholder="Nickname"
          />
          <input
            className={css.textInput}
            type="text"
            name="realName"
            placeholder="RealName"
          />
          <textarea
            className={css.textarea}
            type="text"
            name="description"
            placeholder="Description"
          ></textarea>
          <input
            className={css.textInput}
            type="text"
            name="phrase"
            placeholder="Catch phrase"
          />
          <div className={css.inputFileContainer}>
            <input
              className={css.inputFile}
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
            />
            <label className={css.inputFileLabel} htmlFor="image">
              Choose File
            </label>
          </div>

          <button type="submit">Add hero</button>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreateHero;
