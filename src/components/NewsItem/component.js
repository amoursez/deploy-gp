import { FieldTimeOutlined } from '@ant-design/icons'
import Item from 'antd/lib/list/Item'
import React from 'react'

const NewsItem = () => {
  return (
    <div className=''>
      <h3>Мы разработали новую ракету для запуска в Марс</h3>
      <div>
      <FieldTimeOutlined /> 
      <span>31 минут назад</span>
      </div>
    </div>
  )
}

export default NewsItem;
