import React from 'react'
import NewsImage from '../../components/NewsImage/component'
import NewsItem from '../../components/NewsItem/component'
import BigNewsImage from '../../assets/main/newsImage.png'
import { FieldTimeOutlined } from '@ant-design/icons'
import './style.scss';
import line from '../../assets/main/line.png';
import EntryPage from '../EntryPage/EntryPage'

const MainPage = () => {
  return (
    <div>
      <EntryPage />
    <div className='section  container'>
     <div className='news'>
      <h3>ПОСЛЕДНИЕ НОВОСТИ</h3>
     <NewsItem/>
     <NewsItem/>
     <NewsItem/>
     <NewsItem/>
     <div>
     <p className='all-news'>ВСЕ НОВОСТИ</p>
     <img src={line} alt="line"/>
     </div>
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
    </div>
  )
}

export default MainPage
