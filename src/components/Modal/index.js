import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";
import { StyledModal } from "./styles";

function Modal({ children }) {
  const dispatch = useDispatch();
  return (
    <StyledModal>
      <div className="modal">
        <div className="modal_content">
          <div className="" style={{ textAlign: "right" }}>
            <div
              className="button_remove"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              <CiCircleRemove />
            </div>
          </div>
          <h2 className="modal_heading">Login</h2>
          {children}
        </div>
      </div>
    </StyledModal>
  );
}

export default Modal;
