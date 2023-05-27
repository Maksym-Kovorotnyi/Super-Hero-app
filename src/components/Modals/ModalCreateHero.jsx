import React from "react";

import Modal from "./Modal";

function ModalCreateHero({ open = false }) {
  return (
    <>
      <Modal open={open}>
        <div>ModalCreateHero</div>;
      </Modal>
    </>
  );
}

export default ModalCreateHero;
