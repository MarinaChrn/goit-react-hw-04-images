import PropTypes from 'prop-types';
import { Component } from "react";
import { ModalBackdrop, ModalPicture, ModalWindow } from "./Modal.styled";

export class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    
      handleKeyDown = e => {
        if (e.code === `Escape`) {
          this.props.onClose();
        }
      };
    
      handleBackdropeClick = e => {
        if (e.target === e.currentTarget) {
          this.props.onClose();
        }
      };
    
    render () {
        const bigImg = this.props.modalData;
        return (
            <ModalBackdrop onClick={this.handleBackdropeClick}>
                <ModalWindow>
                   <ModalPicture src={bigImg} alt="" />
                </ModalWindow>
            </ModalBackdrop>
        )
    }
}

Modal.propTypes = {
  modalData: PropTypes.string.isRequired
}