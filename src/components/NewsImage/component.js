import { FieldTimeOutlined } from '@ant-design/icons';
import React from 'react';
import Image from '../../assets/main/newsImage2.png'

const NewsImage = () => {
  return (
    <div>
      <img src={Image}></img>
      <span>НОВОСТИ</span>
      <h3>Мы разработали новую ракету для запуска в Марс</h3>
      <FieldTimeOutlined /> 
      <span>31 минут назад</span>
    </div>
  )
}

export default NewsImage;
