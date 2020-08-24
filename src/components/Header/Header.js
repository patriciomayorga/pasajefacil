import React from "react";

import { Button } from 'antd';

import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__top">
          <img src="./logo.svg" alt="Logo" />
        </div>
        <div className="header__nav">
          <Button>Hola</Button>
        </div>
      </div>
    </header>
  );
}
