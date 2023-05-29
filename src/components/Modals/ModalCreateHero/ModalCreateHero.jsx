import React, { useState } from "react";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { createHero } from "../../../redux/heroOperations";
import css from "./ModalCreateHero.module.css";

function ModalCreateHero({ open = false, close }) {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData();

    formData.append("nickname", form.nickname.value);
    formData.append("real_name", form.realName.value);
    formData.append("origin_description", form.description.value);
    formData.append("catch_phrase", form.phrase.value);
    formData.append("images", selectedFile);

    await dispatch(createHero(formData));
    close(false);
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
            className={css.textArea}
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
            {
              <label className={css.inputFileLabel} htmlFor="image">
                {selectedFile ? selectedFile.name : "Choose file"}
              </label>
            }
          </div>

          <button type="submit">Add hero</button>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreateHero;
