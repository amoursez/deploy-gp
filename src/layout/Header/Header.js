import React from 'react';
import '../Header/Header.css';
import { SearchOutlined } from '@ant-design/icons';

const Header = () => {

      
  return (
    <nav className="navigation">
      <div className="container">
      <a href="/" className="brand-name">
        TheTech
      </a>
     
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">О НАС</a>
          </li>
          <li>
            <a href="/about">НАШИ РАБОТЫ</a>
          </li>
          <li>
            <a href="/contact">ПАРТНЕРЫ</a>
          </li>
          <li>
            <a href="/contact">НАША КОМАНДА</a>
          </li>
          <li>
            <a href="/contact">КОНТАКТЫ</a>
          </li>
          <li>
          <SearchOutlined />
          </li>
          <li>
            <span>ENG</span>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Header


