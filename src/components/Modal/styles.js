import styled from "styled-components";
import { FixedCenter } from "../../styles";

export const ModalBackground = styled.div`
  ${FixedCenter}
  z-index: 9;
  background: rgba(255, 255, 255, 0.75);
  width: 100vw;
  height: 100vh;
`;

export const Modal = styled.div`
  ${FixedCenter}
  z-index: 10;
  background-color: red;
  padding: 40px;
`;

export const TextArea = styled.textarea`
  font-family: "ITC Garamond Std";
  width: 100%;
  -webkit-appearance: none;
  background: unset;
  border: 0px;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  margin-bottom: 30px;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  writing-mode: horizontal-tb !important;
  white-space: pre-wrap;
  max-height: 400px;

  :focus-visible {
    outline: 0px;
  }
`;

export const NewNoteModalContainer = styled(Modal)`
  background-color: #fff;
  border: 1px solid #000;
`;
