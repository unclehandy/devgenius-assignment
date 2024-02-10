// pages/admin.js

import Nav from '@/components/Nav/nav';
import { Calendar, Home, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {

  const menuList = [
    {label:"Home",src:"/dashboard/home",icon:<Home />},
    {label:"Event",src:"/dashboard/event",icon:<Calendar />},
    {label:"User",src:"/dashboard/user",icon:<User />},
  ]

  return (
    <div className="flex h-screen ">
      <div className="w-1/6 h-screen bg-neutral p-4">
        <ul className='flex flex-col gap-3'>
        {menuList.map((item)=>(
         <li key={item.label} className='hover:bg-primary hover:text-slate-800 p-3 rounded-lg transition ease-out duration-300'>
         <Link href={item.src} className='flex flex-row'><div className='me-3'>{item.icon}</div>{item.label}</Link>
       </li>
        ))}
      
        </ul>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden p-4">
        <Nav />

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-6">{children}</div>
        </main>

      </div>
    </div>
  );
};

export default Layout;
