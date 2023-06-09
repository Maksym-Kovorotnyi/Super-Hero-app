import React, { useState } from "react";
import css from "./UpdateHeroInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { heroFullInfo } from "../../redux/heroSelectors";
import { updateHero } from "../../redux/heroOperations";

function UpdateHeroInfo({ closeModal }) {
  const { _id, catch_phrase, nickname, origin_description, real_name } =
    useSelector(heroFullInfo);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(false);
  const [changed, setChanged] = useState(false);
  const [nicknameInput, setNicknameInput] = useState(nickname);
  const [realNameInput, setRealNameInput] = useState(real_name);
  const [descriptionInput, setDescriptionInput] = useState(origin_description);
  const [phraseInput, setPhraseInput] = useState(catch_phrase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData();
    formData.append("nickname", form.nickname.value);
    formData.append("real_name", form.realName.value);
    formData.append("origin_description", form.description.value);
    formData.append("catch_phrase", form.phrase.value);
    if (changed) {
      formData.append("images", selectedFile);
    }

    await dispatch(updateHero({ id: _id, updateInfo: formData }));
    closeModal(false);
  };

  const handleChangeFile = (e) => {
    setChanged(true);
    setSelectedFile(e.target.files[0]);
  };

  const handleChangeInputs = (e) => {
    switch (e.target.name) {
      case "nickname":
        setNicknameInput(e.target.value);
        break;
      case "realName":
        setRealNameInput(e.target.value);
        break;
      case "description":
        setDescriptionInput(e.target.value);
        break;
      case "phrase":
        setPhraseInput(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={css.inputFileContainer}>
          <input
            className={css.inputFile}
            type="file"
            name="image"
            id="image"
            onChange={handleChangeFile}
          />
          {
            <label className={css.inputFileLabel} htmlFor="image">
              {changed ? selectedFile.name : "Choose file"}
            </label>
          }
        </div>
        <p className={css.text}>Nickname:</p>
        <input
          className={css.textInputUpdate}
          name="nickname"
          type="text"
          value={nicknameInput}
          onChange={handleChangeInputs}
        />
        <p className={css.text}>Real name:</p>
        <input
          className={css.textInputUpdate}
          name="realName"
          type="text"
          value={realNameInput}
          onChange={handleChangeInputs}
        />
        <p className={css.text}>Description:</p>
        <textarea
          className={css.textAreaUpdate}
          name="description"
          type="text"
          value={descriptionInput}
          onChange={handleChangeInputs}
        />
        <p>Catch phrase:</p>
        <input
          className={css.textInputUpdate}
          name="phrase"
          type="text"
          value={phraseInput}
          onChange={handleChangeInputs}
        />
        <button className={css.btn} type="submit">
          Save changes
        </button>
      </form>
    </>
  );
}

export default UpdateHeroInfo;
