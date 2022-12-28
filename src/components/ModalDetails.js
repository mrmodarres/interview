import { Modal } from "@mui/material";
import React from "react";

function ModalDetails({ openModal, setOpenModal, rowDetail }) {
  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        style={{
          position: "absolute",
          width: "450px",
          heightL: "220px",
          left: "50%",
          top: "50%",
          backgroundColor: "#efefefef",
          transform: "translate(-50%,-50%)",
          zIndex: "22222",
        }}
      >
        {rowDetail !== null && (
          <span style={{ margin: "10px" }}>{rowDetail.status}</span>
        )}
        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
      </div>
    </Modal>
  );
}

export default ModalDetails;
