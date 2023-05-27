import React, { useEffect } from "react";

import ModalFullInfo from "../ModalFullInfo";
import ModalCreateHero from "../ModalCreateHero";

function ModalHelper({ modal = "", closemodal }) {
  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      closemodal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModalCloseByBackdrop = (e) => {
    closemodal(false);
  };

  return (
    <>
      <div onClick={handleModalCloseByBackdrop}>
        <ModalFullInfo open={modal === "fullInfo"} />
        <ModalCreateHero open={modal === "createHero"} />
      </div>
    </>
  );
}

export default ModalHelper;
