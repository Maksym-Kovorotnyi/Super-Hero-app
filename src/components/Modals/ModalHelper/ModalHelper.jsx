import React, { useEffect } from "react";
import ModalFullInfo from "../ModalFullInfo/ModalFullInfo";
import ModalCreateHero from "../ModalCreateHero/ModalCreateHero";
import css from "./Modal.Helper.module.css";

function ModalHelper({ modal = "", closemodal }) {
  const handleModalCloseByEsc = (e) => {
    if (e.key === "Escape") {
      closemodal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleModalCloseByEsc);
    return () => {
      window.removeEventListener("keydown", handleModalCloseByEsc);
    };
  });

  const handleModalCloseByBackdrop = (e) => {
    if (e.target.className === "Modal_Helper_backdrop__xxh5N") {
      closemodal(false);
    }
  };

  return (
    <>
      {modal ? (
        <div className={css.backdrop} onClick={handleModalCloseByBackdrop}>
          <ModalFullInfo open={modal === "fullInfo"} />
          <ModalCreateHero open={modal === "createHero"} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ModalHelper;
