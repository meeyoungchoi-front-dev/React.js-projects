import React from 'react'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // 이 줄을 추가해 주세요
import Header from '../components/Header';
import CartTabs from './CartTabs';

const Layout = () => {
  return (
    <div className='bg-zinc-300'> 
        <main className='w-[1200px] max-w-full- m-auto- p-5'>
            <Header/>
            <Outlet/>
        </main>
        <CartTabs/>
    </div>
  )

}
export default Layout;