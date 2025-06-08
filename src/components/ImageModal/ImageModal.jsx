import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    background: "transparent",
    minHeight: "400px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};
Modal.setAppElement("#root");
export default function ImageModal({ modalIsOpen, closeModal, src, alt }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img
        src={src || null}
        alt={alt || "Image"}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </Modal>
  );
}
