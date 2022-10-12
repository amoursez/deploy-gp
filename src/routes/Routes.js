import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import MainPage from '../pages/MainPage/MainPage';

const MyRoutes = () => {
  return (
    <BrowserRouter>
{/*         <Header/>
 */}        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/about' element={<AboutUsPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default MyRoutes;
