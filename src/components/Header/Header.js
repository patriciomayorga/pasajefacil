import React from "react";
import { CarOutlined } from '@ant-design/icons';

import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__top">
          <img src="./logo.svg" alt="Logo" />
        </div>
        <div className="header__nav">
          <div className='item'>
            <CarOutlined />
            <div className='text'>Alojamiento</div>
          </div>
          <div className='item'>
            <CarOutlined />
            <div className='text'>Vuelos</div>
          </div>
          <div className='item active'>
            <CarOutlined />
            <div className='text'>Pasajes</div>
          </div>
          <div className='item'>
            <CarOutlined />
            <div className='text'>Aviones</div>
          </div>
        </div>
      </div>
    </header>
  );
}
