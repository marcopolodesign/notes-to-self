import { styled, createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'ITC Garamond Std';
    src: url('/fonts/ITCGaramondStd-BkNarrow.woff2') format('woff2'),
        url('/fonts/ITCGaramondStd-BkNarrow.woff') format('woff'),
        url('/fonts/ITCGaramondStd-BkNarrow.ttf') format('truetype'),
        url('/fonts/ITCGaramondStd-BkNarrow.svg#ITCGaramondStd-BkNarrow') format('svg');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'ITC Garamond Std';
    src: url('/fonts/ITCGaramondStd-LtNarrow.woff2') format('woff2'),
        url('/fonts/ITCGaramondStd-LtNarrow.woff') format('woff'),
        url('/fonts/ITCGaramondStd-LtNarrow.ttf') format('truetype'),
        url('/fonts/ITCGaramondStd-LtNarrow.svg#ITCGaramondStd-LtNarrow') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Graphik';
    src: url('/fonts/Graphik-Regular.woff2') format('woff2'),
        url('/fonts/Graphik-Regular.woff') format('woff'),
        url('/fonts/Graphik-Regular.ttf') format('truetype'),
        url('/fonts/Graphik-Regular.svg#Graphik-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


* {
  margin: 0;
  box-sizing: border-box;
}



body {
  /* min-height: 100vh; */
  margin: auto;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-family: 'Graphik';
  font-weight: 400;
}

.min-h-100-vh {
  min-height: 100vh;
}

.jic {
  justify-content: space-between;
  align-items: center;
}

.m-auto {
  margin: auto;
}

.anchor {
  cursor: pointer;
}

h2 {
  font-family: "ITC Garamond Std";
  font-weight: 200;
  font-size: 18px;
}

.itc-g {
  font-family: "ITC Garamond Std";
  font-weight: 200;
}

.w-quarter {
  width: 25%;
}

.w-three-quarters {
  width: 75%;
}

.search-header {
  /* border-left: 1px solid black;
  border-right: 1px solid black; */
  padding: 0 10px;
}

.note.Personal, .modal-inner.Personal {
  background: #a0bdd7;
}

.note-category {
  padding: 15px 25px;
  border-radius: 12px;
}

.note.Personal .note-category, .modal-inner.Personal .note-category, .note-category.Personal {
  background-color: #304F67;
  color: #A0BDD7;
}

.note.Work .note-category, .modal-inner.Work .note-category, .note-category.Work {
  background-color: #306764;
  color: #A6CAC9;
}

.note.Motivation, .modal-inner.Motivation {
  background-color: #B9B2CA;
}

.note.Motivation .note-category, .modal-inner.Motivation .note-category, .note-category.Motivation {
  background-color: #4A4261;
  color: #B9B2CA;
}


.note.Work, .modal-inner.Work {
  background: #A6CAC9;
}

.modal-inner .note-category {
  opacity: 0.5;
  transition: all 0.3s ease;
  cursor: pointer;
}

.modal-inner .note-category:hover, .modal-inner .note-category.active {
  opacity: 1;
}

.nn-cta-header {
  padding: 10px 25px;
  border: 1px solid #000;
  border-radius: 100px;
}

.log-in-form-container {
  background-color: #B9CAA6;
  transition: all 0.5s ease;
  justify-content: center;
}

.log-in-form-container svg {
  -webkit-transform: translateY(-104%);
    -ms-transform: translateY(-104%);
    transform: translateY(-82%);
    width: 150px;
    height: auto !important;
}

.log-in-form-container p {
  margin-top: -70px;
}

@media(max-width: 580px) {

  .desktop {
    display: none;
  }

  .menu-aob {
    width: 60%;
  }
  
  .log-in-form-container p {
    padding-left: 5px;
    padding-right: 5px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
.user-header {
  padding-left: 1em;
  padding-right: 1em;
}


.modal-inner {
  width: 90%;
}

.modal-inner > div {
  flex-direction: column;
}

.modal-inner > div > div {
width: 100%;
flex-direction: column}
}

.note-category {
  margin-right:0px;
  margin-bottom: 20px;
}

.note {
  min-width: 100% !important;
}

`;

export const FixedCenter = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
