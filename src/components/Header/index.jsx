import React from "react";
import { Logo, Header } from "./styles";

const HeaderComponent = ({ openNewModal, logout }) => (
  <>
    <Header>
      <Logo title="Notes to Self by Marco Polo" />
      <div className="menu-aob flex w-30 justify-between items-center h-100">
        <div onClick={openNewModal} className="nn-header mr3 anchor">
          <h2 className="f3 nn-cta-header desktop">+ New Note</h2>
        </div>

        <div className="search-header dn">
          <p>Buscar</p>
        </div>

        <div className="user-header ph4 anchor">
          <p className="ttc">{localStorage.getItem("username")}</p>
        </div>

        {console.log(localStorage.getItem("username"))}
        <div onClick={logout} className="user anchor">
          <p>Sign out</p>
        </div>
      </div>
    </Header>
  </>
);

export default HeaderComponent;
