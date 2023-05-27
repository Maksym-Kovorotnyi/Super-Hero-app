import React from "react";
import { useSelector } from "react-redux";
import { ReactDOM } from "react";
import { heroFullInfo } from "../redux/heroSelectors";

function Modal({ open }) {
  const { images, catch_phrase, nickname, origin_description, real_name } =
    useSelector(heroFullInfo);

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div>
        <img src={images} alt="Hero_photo" />
        <p>Nickname: {nickname}</p>
        <p>Real name: {real_name}</p>
        <p>Description: {origin_description}</p>
        <p>Catch phrase: {catch_phrase}</p>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
