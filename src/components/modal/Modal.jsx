import PropTypes from 'prop-types';
import { useEffect } from "react";
import { ModalBackdrop, ModalPicture, ModalWindow } from "./Modal.styled";

export const Modal =({onClose, modalData})=>{
    // componentDidMount() {
    //     window.addEventListener('keydown', this.handleKeyDown);
    //   }
    
    //   componentWillUnmount() {
    //     window.removeEventListener('keydown', this.handleKeyDown);
    //   }

    useEffect(()=> {
      window.addEventListener('keydown', handleKeyDown);
      return()=> {
        window.removeEventListener('keydown', handleKeyDown);
      }
    })
    
    const handleKeyDown = e => {
        if (e.code === `Escape`) {
          onClose();
        }
      };
    
    const handleBackdropeClick = e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    

        return (
            <ModalBackdrop onClick={handleBackdropeClick}>
                <ModalWindow>
                   <ModalPicture src={modalData} alt="" />
                </ModalWindow>
            </ModalBackdrop>
        )

}

Modal.propTypes = {
  modalData: PropTypes.string.isRequired
}