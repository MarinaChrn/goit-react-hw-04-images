import styled from "styled-components";

export const ModalBackdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
z-index: 1200;
`

export const ModalPicture = styled.img`
max-width: 732px;
max-height: 520px;
`

export const ModalWindow = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 732px;
max-height: 520px;
`