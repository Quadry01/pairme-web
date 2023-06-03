import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { SignInModal } from '../components/SignInModal';

const SharedLayout = () => {
  return (
    <div className="bg-blue-foundation relative">
      <Navbar/>

      <section className='pt-12 md:pt-[97px]'>
        {/* pt-12 md:pt-32 */}
        <Outlet/>
      </section>

      <SignInModal/>
    </div>
  )
}

export default SharedLayout
