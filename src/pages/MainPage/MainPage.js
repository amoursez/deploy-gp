import React from 'react'
import NewsImage from '../../components/NewsImage/component'
import NewsItem from '../../components/NewsItem/component'
import BigNewsImage from '../../assets/main/newsImage.png'
import { FieldTimeOutlined } from '@ant-design/icons'
import './style.scss';
import line from '../../assets/main/line.png';
import AboutUsPage from '../AboutUsPage/AboutUsPage'

const MainPage = () => {
  return (
    <div>
    <div className='section  container'>
     <div className='news'>
      <h3>ПОСЛЕДНИЕ НОВОСТИ</h3>
     <NewsItem/>
     <NewsItem/>
     <NewsItem/>
     <NewsItem/>
     <p className='all-news'>ВСЕ НОВОСТИ</p>
     </div>
    
     <div className='main-news'>
      <img src={BigNewsImage} />
      <div className='text'>
        <img src={line} alt="line"/>
        <h6>НОВОСТИ</h6>
      <p>Мы разработали новую ракету для запуска в Марс</p>
      <FieldTimeOutlined /> 
      <span>31 минут назад</span>
      </div>
      <div className='additional-news'>
      <NewsImage/>
      <NewsImage/>
      <NewsImage/>
      </div>
     </div>
     
    </div>
    <AboutUsPage/>
    </div>
  )
}

export default MainPage
