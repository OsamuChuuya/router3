import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className="bg-white">
      <header className="w-[1440px] mx-auto">
        <Nav />
        <div className="flex gap-[120px] mx-auto w-[1036px] mt-[15px]">
          <MenuLink to="/about" label="о бренде" />
          <MenuLink to="/product" label="продукции" />
          <MenuLink to="/preim" label="преимущества" />
          <MenuLink to="/club" label="открыть клуб" />
          <MenuLink to="/contact" label="контакты" />
        </div>
      </header>

      <main className="px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}

function MenuLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-bold text-[15px] uppercase ${
          isActive
            ? 'text-blue-700 underline'
            : 'text-black hover:underline'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default Layout
