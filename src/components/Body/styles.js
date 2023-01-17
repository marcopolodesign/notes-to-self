import styled, { createGlobalStyle } from "styled-components";

export const NoteStyle = createGlobalStyle`

.note {
  background: #a0bdd7;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #000000;
  padding: 35px;
  flex: 1 0 0;
  min-width: 25%;
}

.note:first-child, .note:nth-child(2), .note:nth-child(3), .note:nth-child(4) {
  width: 25%;
}
 
.note-misc {
  border-top: 1px solid #000;
  padding-top: 15px;
  margin-top: 20px;
}

.note-misc p {
  font-size: 14px;
}




`;

export const NewNote = styled.div.attrs(({ index }) => ({
  index: index
}))`
  /* width: ${(props) => props.Width}; */
  background: #a0bdd7;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #000000;
  padding: 35px;
  flex: 1 0 0;
  min-width: 25%;
`;

export const FNote = styled(NewNote)`
  background: #fff;
  color: #6d6d6d;
  width: 25%;
`;
