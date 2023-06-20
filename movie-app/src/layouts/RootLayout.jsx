import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


function RootLayout() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center p-2 max-w-7xl mx-auto mt-10 ">
          <div>
            <Link
              className="flex items-center gap-3 text-3xl font-extrabold text-[#0C276A]"
              to="/"
            >
              <img
                className="w-14 h-14 rounded-full"
                src="./images/cine.jpg"
                alt="icon"
              />
              MovieFun
            </Link>
          </div>
          <div className="space-x-10 p-4">
            <NavLink className="text-primary text-xl font-semibold" to="/">
              Home
            </NavLink>
            <NavLink className="text-primary text-xl font-semibold" to="movie">
              Movies
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
       
      </footer>
    </>
  );
}

export default RootLayout;
