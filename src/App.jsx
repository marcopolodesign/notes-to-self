import React, { useState, setState } from "react";
import "tachyons";
import { GlobalStyle } from "./styles.js";
import Header from "./components/Header";
import Body from "./components/Body";
import Modal from "./components/Modal";
import NewNoteModal from "./components/Modal/new-note";
import LogIn from "./components/Login";
import useAuth from "./components/Login/auth";

const App = () => {
  const { isAuth, login, logout } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

  const [selectedNote, setSelectedNote] = useState(null);

  const pickNote = (note) => {
    setSelectedNote(note);
    toggleModal();
    console.log(selectedNote);
  };

  const toggleModal = (event) => {
    setShowModal((showModal) => !showModal);
  };

  const openNewModal = (event) => {
    setShowNewModal((showNewModal) => true);
  };

  const closeModal = (event) => {
    setShowModal((showModal) => false);
    setShowNewModal((showNewModal) => false);
  };

  return (
    <div className="App m-auto">
      <GlobalStyle />
      {isAuth ? (
        <>
          <Header openNewModal={openNewModal} logout={logout} />
          <Body
            toggleModal={toggleModal}
            openNewModal={openNewModal}
            pickNote={pickNote}
          />
        </>
      ) : (
        <>
          {/* <Header openNewModal={openNewModal} login={login} /> */}
          <LogIn />
        </>
      )}

      {showModal && (
        <Modal
          toggleModal={toggleModal}
          closeModal={closeModal}
          note={selectedNote}
        />
      )}

      {showNewModal && <NewNoteModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
