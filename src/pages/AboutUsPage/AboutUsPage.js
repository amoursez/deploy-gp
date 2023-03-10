import React from 'react';
import BigNewsImage from '../../assets/main/newsImage.png'
import OurTeam from '../../components/OurTeam/component';
import './style.scss';

const AboutUsPage = () => {
  return (
    <div className='container about'>
      <h1>О нас</h1>
      <p>Apple Inc. — американская корпорация, основанная 1 апреля 1976, в Калифорнии Стивом Джобсом, Рональдом Уэйном и Стивом Возняком. Компания Apple Inc. разрабатывает, производит и продаёт персональные компьютеры, мобильные коммуникационные и медиа устройства, портативные цифровые музыкальные проигрыватели, а также сопутствующее программное обеспечение, услуги, периферийные устройства, сетевые решения и цифровой контент и приложения сторонних производителей по всему миру. Компания продает свою продукцию по всему миру через интернет-магазины, розничные магазины, службы прямых продаж, сторонних оптовиков и реселлеров с добавленной стоимостью. Штаб-квартира находится в Купертино, штат Калифорния.
</p>
<img src={BigNewsImage} />
<p>
Среди известных, для простого обывателя, программ Apple можно выделить такие, как macOS и iOS, медиаплеер iTunes, веб-браузер Safari и iVife и iWork, а также профессиональные приложения: Final Cut Pro, Logic Pro и Xcode. Его онлайн-сервисы включают iTunes Store, iOS App Store и Mac App Store, Apple Music и iCloud.
</p>
<img src={BigNewsImage} />
<p>Apple — крупнейшая в мире компания в области информационных технологий по доходам и третий по величине производитель мобильных телефонов в мире после Samsung и Huawei. iTunes Store, который является крупнейшим в мире магазином музыки. По статистике, более 1,3 млрд. продуктов Apple активно используются во всем мире. Бренд Apple неоднократно считался самым ценным брендом в мире. Однако, компания получает значительную критику в отношении трудовых практик своих подрядчиков, его экологической и деловой практики, в том числе нечестной конкуренции, а также происхождения исходных материалов.</p>
<OurTeam/>
    </div>
  )
}

export default AboutUsPage
