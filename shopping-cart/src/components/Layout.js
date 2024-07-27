import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import CartTabs from './CartTabs';

const Layout = () => {
  return (
    <div>
        <main>
            <Header/>
            <Outlet/>
        </main>
        <CartTabs/>
    </div>
  )

}
export default Layout;